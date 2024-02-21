import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { IMember } from "../../../../comons/interfaces";

interface IProps {
  member?: IMember, 
  isOpen: boolean, 
  onClose: () => void,
  onSave: (editedMember: IMember) => void
}

function EditMemberModal({ member, isOpen, onClose, onSave }: IProps) {
  const [editedMember, setEditedMember] = useState<IMember | undefined>(undefined);

  const handleOpen = () => {
    setEditedMember(member);
  };

  const handleClose = () => {
    
  };

  const handleSave = () => {
    onSave(editedMember)
    onClose()
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMember({
      ...editedMember,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {setEditedMember(member)}, [member])

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent  marginTop={"25px"} marginBottom={"20px" }maxW={"none"} width={"1200px"} >
          <ModalHeader>Editar Membro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           {member !== undefined &&
            <FormControl>
                <Flex>
                <FormControl id="name" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" name="name" value={editedMember?.name} onChange={handleChange} />
                </FormControl>
                <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" name="password" value={editedMember?.password} onChange={handleChange} />
                </FormControl>
            </Flex>
            <Flex> 
                <FormControl id="phone" marginRight={"10px"} marginBottom={"10px"}>
                <FormLabel>Telefone</FormLabel>
                <Input type="number" name="phone" value={editedMember?.phone} onChange={handleChange} />
                </FormControl>
                <FormControl id="email">
                <FormLabel>E-mail</FormLabel>
                <Input type="email" name="email" value={editedMember?.email} onChange={handleChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="address" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Endereço</FormLabel>
                    <Input type="text" name="address" value={editedMember?.address} onChange={handleChange} />
                </FormControl>
                <FormControl  width={"200px"} justifySelf={"left"} id="addressNumber">
                    <FormLabel>Número</FormLabel>
                    <Input type="number" name="addressNumber" value={editedMember?.addressNumber} onChange={handleChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="neighborhood" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Bairro</FormLabel>
                    <Input type="text" name="neighborhood" value={editedMember?.neighborhood} onChange={handleChange} />
                </FormControl>
                <FormControl id="city">
                    <FormLabel>Cidade</FormLabel>
                    <Input type="text" name="city" value={editedMember?.city} onChange={handleChange} />
                 </FormControl>
            </Flex>
            <Flex>
                <FormControl  id="zipcode" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>CEP</FormLabel>
                    <Input type="number" name="zipcode" value={editedMember?.zipcode} onChange={handleChange} />
                </FormControl>
                <FormControl id="rg">
                    <FormLabel>RG</FormLabel>
                    <Input type="text" name="rg" value={editedMember?.rg} onChange={handleChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="cpf" marginRight={"10px"} marginBottom={"10px"}>
                <FormLabel>CPF</FormLabel>
                <Input type="text" name="cpf" value={editedMember?.cpf} onChange={handleChange} />
                </FormControl>
                <FormControl id="dateOfBaptism">
                <FormLabel>Data de Batismo</FormLabel>
                <Input type="date" name="dateOfBaptism" value={editedMember?.dateOfBaptism} onChange={handleChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="dateOfBirth" marginRight={"10px"} marginBottom={"10px"}>
                <FormLabel>Data de Aniversário</FormLabel>
                <Input type="date" name="dateOfBirth" value={editedMember?.dateOfBirth} onChange={handleChange} />
                </FormControl>
                <FormControl id="job">
                <FormLabel>Trabalho</FormLabel>
                <Input type="text" name="job" value={editedMember?.job} onChange={handleChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="maritalStatus" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Estado Civil</FormLabel>
                    <Input type="text" name="maritalStatus" value={editedMember?.maritalStatus} onChange={handleChange} />
                </FormControl>
                <FormControl id="spousesName" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Nome do Conjuge</FormLabel>
                    <Input type="text" name="spouseName" value={editedMember?.spouseName} onChange={handleChange} />
                </FormControl>
            </Flex>    
            </FormControl>}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Salvar
            </Button>
            <Button variant="ghost" onClick={handleClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditMemberModal