import { Box, Button, Divider, Flex, Heading, TableContainer, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react"
import { IBook } from "../../comons/interfaces";
import { AddBookModal } from "./components/createBookModal";
import Menu from "../../components/menu";

const UserBooksScreen = () => {
  const [showAddBookModal, setShowAddBookModal] = React.useState(false)

    return (
    <Flex flexDir={"column"} alignItems={"center"} height={"100vh"}>
      <Menu backgroundColor="#013d3720"/>

      <Text fontSize="2rem" marginBottom={"3"} marginTop={"0px"} display={"flex"} alignItems={"center"}> Olá, <Text marginLeft={"2"} fontWeight="500" textColor={"#09216E"}>Matheus Candido Pareshi Soares</Text> </Text> 
      
      <Divider height={"0.5"} bgColor="#bb7512" marginY="2rem"></Divider>

      <Heading marginTop={"-0.5rem"} fontSize={"1.8rem"}> MEUS LIVROS </Heading>
      <Flex width={"100%"} justifyContent={"center"}>
        <Flex onClick={() => {() => setShowAddBookModal(true)}} bgColor="#09216E20" _hover={{backgroundColor: "#09216E40"}} paddingX={"0.5rem"} paddingY={"2"} marginTop={"20px"} width={"20%"} borderRadius={"5px"} justifyContent={"space-around"}>
          <Text fontWeight={"700"} >Adicionar novo livro</Text>
        </Flex>
      </Flex>
      <TableContainer width={"1300px"} bgColor="#09216E30" borderRadius={"10px"} mt={"15px"} padding={"1rem"}>
        <Table width={"100%"}>
          <Thead>
            <Tr height={"2rem"}>
              <Th textAlign={"left"} textColor={"#013d37"}>Título</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Autor</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Gênero</Th>
              <Th textAlign={"left"} textColor={"#013d37"}>Emprestado</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          {/* <Tbody>
            {books && books.map((book: IBook) => {
              return (            
                <Tr height={"2rem"} >
                  <Td>{book.title}</Td>
                  <Td>{book.author}</Td>
                  <Td>{book.genre}</Td>
                  <Td>{book.pending == 1 ? "Sim" : "Não"}</Td>
                  <Td width={"60px"}>
                    <Button 
                      onClick={() => {}}                        
                      border={"none"} borderRadius={"10px"} 
                      padding={"0.5rem"} 
                      textColor={"#d5d1cc"} fontWeight={"600"}
                      colorScheme='teal'
                    > Editar </Button>
                  </Td>
                  <Td width={"60px"}>
                    <Button 
                      onClick={() => {}}                        
                      border={"none"} borderRadius={"10px"} 
                      padding={"0.5rem"} 
                      textColor={"#d5d1cc"} fontWeight={"600"}
                      colorScheme='red'
                    > Excluir </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>             */}
        </Table>
      </TableContainer>

      <AddBookModal isOpen={false} onClose={() => setShowAddBookModal(false)} />
    </Flex>
    )
}

export default UserBooksScreen