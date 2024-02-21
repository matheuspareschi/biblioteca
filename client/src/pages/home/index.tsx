import React from "react";
import { useUser } from "../../comons/context/user";
import { useLoan } from "../../comons/hooks/useLoan";
import { useLibraryCollection } from "../../comons/hooks/useLibraryCollection";
import { Box, Flex, Text, Table, Thead,Tbody, Tr, Td, TableContainer, Divider, Button, Heading, Th } from "@chakra-ui/react";
import { IBook } from "../../comons/interfaces";
import { ModalComponent } from "../../components/modal";
import { useHome } from "./useHome";
import Menu from "../../components/menu";

const Homepage = () => {
  const {user} = useUser();
  const {createLoan, loanErr, setLoanErr, loading} = useLoan()
  const {getLibraryCollection, libraryCollection} = useLibraryCollection()
  const {checkboxText, idBook, showModal, setShowModal, text, title, tableButton} = useHome()

  React.useEffect(() => {
    getLibraryCollection()
  }, [loading])

  return (
    <Flex flexDir={"column"} alignItems={"center"} height={"100vh"}>
      <Menu backgroundColor="#013d3720" />

      <Text fontSize="2rem" marginBottom={"3"} marginTop={"0px"} display={"flex"} alignItems={"center"}> Olá, <Text marginLeft={"2"} fontWeight="500" textColor={"#09216E"}> { user.name}</Text> </Text> 
      <Box bgColor={"#09216E"} paddingX={"1rem"} borderRadius={"20px"}>
        <Text fontSize="16" textColor={"#d5d1cc"} marginBottom={"1rem"}marginTop={"1rem"} fontWeight="400"> Aqui você tem acesso ao nosso acervo e pode fazer seus empréstimos </Text>    
      </Box>
      
      <Divider height={"0.5"} bgColor="#bb7512" marginY="2rem"></Divider>

      <Heading marginTop={"-0.5rem"} fontSize={"1.8rem"}> ACERVO </Heading>
      <TableContainer width={"1300px"} bgColor="#bb751230" borderRadius={"10px"} mt={"15px"} padding={"1rem"}>
        <Table width={"100%"}>
          <Thead>
            <Tr height={"2rem"}>
              <Th textAlign={"left"} textColor={"#013d37"}>Título</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Autor</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Gênero</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Quantidade</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Dono</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Emprestado</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {libraryCollection && libraryCollection.map((book: IBook) => {
              return (            
                <Tr height={"2rem"} >
                  <Td>{book.title}</Td>
                  <Td>{book.author}</Td>
                  <Td>{book.genre}</Td>
                  <Td>{book.quantity}</Td>
                  <Td>{book.owner}</Td>
                  <Td>{book.pending == 2 ? "Sim" : "Não"}</Td>
                  <Td>
                    <Button 
                      onClick={() => {tableButton(book.idBook)}}                        
                      border={"none"} borderRadius={"10px"} 
                      padding={"0.5rem"} bgColor={"#013d37"} 
                      textColor={"#d5d1cc"} fontWeight={"600"}
                      colorScheme='teal'
                      isDisabled={book.pending == 2}
                    > Emprestar </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>            
        </Table>
      </TableContainer>

      <ModalComponent 
        title={title} 
        text={text} 
        checkboxText={checkboxText} 
        onClick={() => {
          createLoan(user.idMember, idBook);
        }} 
        isOpen={showModal} 
        onClose={() => {setShowModal(false), setLoanErr(undefined)}}
        loanStatus={loanErr}
      />
    </Flex>
  );
};


export default Homepage;
