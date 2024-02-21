import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useLoan } from "../../comons/hooks/useLoan";

interface IUseHome {
    title: string,
    text: string, 
    checkboxText: string,
    showModal: boolean, 
    setShowModal:  React.Dispatch<React.SetStateAction<boolean>>,
    idBook: number,
    setIdBook: React.Dispatch<React.SetStateAction<number>>,
    tableButton: (bookId: number) => void,
    navigate: NavigateFunction,
}

export const useHome = ():IUseHome => {
    const [showModal, setShowModal] = React.useState(false);
    const [idBook, setIdBook] = React.useState<number>()
    
    const navigate = useNavigate();
    const {returnDateString} = useLoan()

  
    const text = `Você retirou um livro da biblioteca com o prazo de 30 dias (${returnDateString()}) para devolução.
      Ao fazer isso, você se comprometeu a cuidar bem do livro e respeitar a data limite. 
      Isso é importante para que nossa biblioteca funcione bem e atenda a todos os leitores. 
      Se você tiver algum problema para devolver o livro no prazo, por favor, avise o Sérgio ou o Matheus o quanto antes. 
      Podemos negociar uma renovação ou uma nova data. Agradecemos a sua colaboração e esperamos que você aproveite a leitura.
    `
    const title = "Termos do empréstimo"
    const checkboxText = "Me comprometo com o prazo e em zelar pelo livro"

    const tableButton = (bookId: number) => {
        setShowModal(true)
        setIdBook(bookId)
    }

    return ({
        title, 
        text,
        checkboxText,
        idBook,
        setIdBook,
        setShowModal,
        showModal,
        tableButton,
        navigate,
    })
}