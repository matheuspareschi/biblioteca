import React, { useEffect } from "react"
import { Button, Flex, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Table, Heading, Divider } from "@chakra-ui/react"
import { useUser } from "../../comons/context/user";
import { IMember } from "../../comons/interfaces";
import MemberForm from "./components/modalForm";
import EditMemberModal from "./components/modalMoreInfo";
import Menu from "../../components/menu";
import useMembers from "../../comons/hooks/useMembers";

const MembersScreen = () => {
    const {getMembers, members, alterMember, createMember} = useMembers()

    const [showMemberForm, setShowMemberForm] = React.useState(false);
    const [showEditeMemberModal, setShowEditeMemberModal] = React.useState(false);
    const [editMember, setEditMember] = React.useState<IMember | null>()
    const [memberLoaded, setMembersLoaded] = React.useState(false)

    useEffect(() => {
      getMembers();
      
      if (members === undefined) 
      return setMembersLoaded(false) 

    }, [memberLoaded])

    return (
        <Flex  flexDir={"column"} alignItems={"center"} height={"100vh"} overflow={"scroll"}>
          <Menu backgroundColor="#bb751230"/>

          <Divider height={"0.5"} bgColor="#bb7512" marginTop="1rem"></Divider>
          <Heading marginTop="1rem" fontSize={"1.8rem"}> MEMBROS </Heading>
          
          <Flex width={"100%"} justifyContent={"center"}>
              <Flex onClick={() => setShowMemberForm(true)} bgColor="#bb751230" _hover={{backgroundColor: "#BA120050"}} paddingX={"0.5rem"} paddingY={"2"} marginTop={"20px"} width={"20%"} borderRadius={"5px"} justifyContent={"space-around"}>
                  <Text fontWeight={"700"} >Adicionar novo membro</Text>
              </Flex>
          </Flex>


          <TableContainer width={"1300px"} height={"fit-content"} max-height={"500px"} bgColor="#013d3720" borderRadius={"10px"} mt={"20px"} marginBottom={"2rem"} padding={"1rem"} overflowY={"scroll"}>
              <Table width={"100%"}>
                  <Thead>
                      <Tr height={"2rem"}>
                      <Th textAlign={"left"} textColor={"#013d37"}>Nome</Th>
                      <Th textAlign={"left"} textColor={"#013d37"}>Telefone</Th>
                      <Th textAlign={"left"} textColor={"#013d37"}>E-mail</Th>
                      <Th textAlign={"left"} textColor={"#013d37"}>Endereço</Th>
                      <Th></Th>
                      </Tr>
                  </Thead>
                  <Tbody>
                      {members && members.map((member: IMember) => {
                      return (            
                          <Tr height={"2rem"} >
                              <Td>{member.name}</Td>
                              <Td>{member.phone}</Td>
                              <Td>{member.email}</Td>
                              <Td>{member.address}, {member.addressNumber},{member.neighborhood} </Td>
                              <Td>
                                  <Button 
                                  onClick={() => {setEditMember(member); setShowEditeMemberModal(true)}}                        
                                  border={"none"} borderRadius={"10px"} 
                                  padding={"0.5rem"} bgColor={"#013d37"} 
                                  textColor={"#d5d1cc"} fontWeight={"600"}
                                  colorScheme='teal'
                                  > Saber mais </Button>
                              </Td>
                          </Tr>
                      )
                      })}
                  </Tbody>            
              </Table>
          </TableContainer>

          <MemberForm isOpen={showMemberForm} onClose={() => {setShowMemberForm(false)}} createUser={createMember} />

          <EditMemberModal 
            member={editMember}
            isOpen={showEditeMemberModal} 
            onClose={() => setShowEditeMemberModal(false)}
            onSave={alterMember}
           />
        </Flex>
    )
}

export default MembersScreen