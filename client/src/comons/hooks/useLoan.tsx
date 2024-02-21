import axios from "axios";
import { useState } from "react";
import { IBook, ILoan } from "../interfaces";
import { useToast } from "@chakra-ui/react";

interface IUseLoan {
    loading: Boolean,
    allLoans: ILoan[],
    loanErr?: boolean,
    usersLoan: ILoan[],
    getAllLoans: VoidFunction
    loanDateString: () => string,
    returnDateString: () => string,
    returnLoan:  (idLoan: number, idBook: number) => void,
    getLoanFromUser: (memberId: number) => void,
    createLoan: (memberId: number, bookId: number) => void,
    setNewLoan: React.Dispatch<React.SetStateAction<ILoan>>,
    setLoanErr: React.Dispatch<React.SetStateAction<boolean | boolean>>,
}

export const useLoan = (): IUseLoan => {
    const [usersLoan, setUsersLoan] = useState<ILoan[]>();
    const [newLoan, setNewLoan] = useState<ILoan>();
    const [loanErr, setLoanErr] = useState(false);
    const [loading, setLoading] = useState(false)
    const [allLoans, setAllLoans] = useState<ILoan[]>()

    const toast = useToast()

    const loanDateString = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear(); 
        return `${month}/${day}/${year}`;
    } 

    const returnDateString = () => {
        const today = new Date();
        const returnDate = new Date(loanDateString())
        returnDate.setDate(returnDate.getDate() + 30)
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear(); 
        return `${month}/${day}/${year}`
    }

    const createLoan = (memberId: number, bookId: number) => {
        setNewLoan({
            idBook: bookId,
            idMember: memberId,
            loanDate: loanDateString(),
            returnDate: returnDateString(),
            idLoan: new Date().getTime(),
            pending: 2
        })

        axios.post("http://localhost:3002/api/createLoan", {
            loanDate: newLoan.loanDate, 
            returnDate: newLoan.returnDate,
            pending: newLoan.pending,
            idMember: newLoan.idMember,
            idBook: newLoan.idBook
        })
        .then((data) => { 
            if(data.data.sqlMessage) 
            return setLoanErr(true)

            setLoanErr(false)
            setUsersLoan(data.data); 
        })

        axios.post("http://localhost:3002/api/alterPendingBook", {
            pending: 2,
            idBook: newLoan.idBook
        })

        setLoading(!loading)
    }

    const getLoanFromUser = (memberId: number) => {
        axios.post("http://localhost:3002/api/userLoaning", {
          idMember: memberId
         }
        ).then((data) => {setUsersLoan(data.data)})
    }

    const getAllLoans = () => {
        axios.get("http://localhost:3002/api/getAllLoan").then((data) => {
            setAllLoans(data.data)
        })
    }

    const returnLoan = async (idLoan: number, idBook: number) => {
        axios.post("http://localhost:3002/api/alterPendingBook", {
            pending: 1,
            idBook: idBook
        })

        await axios.post("http://localhost:3002/api/updateLoan", {pending: 1, idLoan: idLoan})
        .then(() => { 
         setLoading(true)
         return toast({
            title: "Livro devolvido com sucesso",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })})
        .catch( () => {return toast({
            title: "Houve algum problema",
            status: 'error',
            duration: 9000,
            isClosable: true,
        })});
    }

  return (
    {
        loanErr,
        loading,
        allLoans,
        usersLoan,
        setLoanErr, 
        setNewLoan,
        returnLoan,
        createLoan,
        getAllLoans,
        loanDateString,
        returnDateString,
        getLoanFromUser,
    }
  )
}

