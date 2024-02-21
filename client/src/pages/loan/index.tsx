import { Box, Button, Divider, Flex, Heading, TableContainer, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import { ILoan } from "../../comons/interfaces";
import Menu from "../../components/menu";
import { useLoan } from "../../comons/hooks/useLoan";
import { useUser } from "../../comons/context/user";
import { useLibraryCollection } from "../../comons/hooks/useLibraryCollection";
import useMembers from "../../comons/hooks/useMembers";

const LoanScreen = () => {
    const {user} = useUser();
    const {getMemberName} = useMembers()
    const {getLoanFromUser, usersLoan, returnLoan, loading, allLoans, getAllLoans} = useLoan()
    const {getBookNameFromId, getLibraryCollection, libraryCollection} = useLibraryCollection()

    React.useEffect(() => {
      getAllLoans()
      getLoanFromUser(user.idMember)
      getLibraryCollection()
    }, []); 

    React.useEffect(() => {
      getLoanFromUser(user.idMember)
    }, [loading])
    
    return (
    <Flex flexDir={"column"} alignItems={"center"} height={"auto"} minH={"100vh"}>
      <Menu backgroundColor="#013d3720"/>

      <Divider height={"0.5"} bgColor="#bb7512" marginY="2rem"></Divider>

      <Heading marginTop={"-0.5rem"} fontSize={"1.8rem"}> MEUS EMPRÉSTIMOS </Heading>

      <TableContainer width={"1300px"} bgColor="#09216E30" borderRadius={"10px"} mt={"15px"} padding={"1rem"}>
        {usersLoan !== undefined ? <Table width={"100%"}>
          <Thead>
            <Tr height={"2rem"}>
              <Th textAlign={"left"} textColor={"#013d37"}>Data de devolução</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Data de empréstimo</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Nome do livro</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Emprestado</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {(libraryCollection) && usersLoan.map((loan: ILoan)  => {
              return (            
                <Tr height={"2rem"} >
                  <Td>{loan.returnDate}</Td>
                  <Td>{loan.loanDate}</Td>
                  <Td>{loan.idBook && getBookNameFromId(loan.idBook)}</Td>
                  <Td width={"60px"}>
                    <Button 
                      onClick={() => {returnLoan(loan.idLoan, loan.idBook)}}                        
                      border={"none"} borderRadius={"10px"} 
                      padding={"0.5rem"} 
                      textColor={"#d5d1cc"} fontWeight={"600"}
                      colorScheme='teal'
                    > Devolver </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>            
        </Table> : 
        <Text textAlign={"center"} fontSize={"2rem"}> Nenhum emprésitmo encontrado </Text>}
      </TableContainer>
     { (user.levelAccess === 1) && 
      <>
      <Divider height={"0.5"} bgColor="#bb7512" marginY="2rem" />

        <Heading marginTop={"-0.5rem"} fontSize={"1.8rem"}> TODOS OS EMPRÉSTIMOS ATIVOS </Heading>

        <TableContainer width={"1300px"} bgColor="#09216E30" borderRadius={"10px"} mt={"15px"} padding={"1rem"} mb="20px">
        {allLoans ?
          <Table width={"100%"}>
            <Thead>
              <Tr height={"2rem"}>
                <Th textAlign={"left"} textColor={"#013d37"}>Data de devolução</Th>
                <Th textAlign={"left"} textColor={"#013d37"}>Data de empréstimo</Th>
                <Th textAlign={"left"} textColor={"#013d37"}>Nome do livro</Th>
                <Th textAlign={"left"} textColor={"#013d37"}>Nome do membro</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {libraryCollection && allLoans.map((loan: ILoan) => {
                return (            
                  <Tr height={"2rem"} >
                    <Td>{loan.returnDate}</Td>
                    <Td>{loan.loanDate}</Td>
                    <Td>{loan.idBook && getBookNameFromId(loan.idBook)}</Td>
                    <Td>{loan.idMember && getMemberName(loan.idMember)}</Td>
                    <Td width={"60px"}>
                      <Button 
                        onClick={() => {returnLoan(loan.idLoan, loan.idBook)}}                        
                        border={"none"} borderRadius={"10px"} 
                        padding={"0.5rem"} 
                        textColor={"#d5d1cc"} fontWeight={"600"}
                        colorScheme='teal'
                      > Devolver </Button>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>            
          </Table>
          :   <Text textAlign={"center"} fontSize={"2rem"}> Nenhum emprésitmo encontrado </Text>}
        </TableContainer> 
      </>}
    </Flex>
    )
}

export default LoanScreen