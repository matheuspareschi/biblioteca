import React from 'react';
import { Box, FormControl, FormLabel, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import { IMember } from '../../../../comons/interfaces';

interface IProps {
    isOpen: boolean,
    onClose: () => void,
    createUser: (member: IMember) => void
}

const MemberForm: React.FC<IProps> = ({isOpen, onClose, createUser}) => {
  const [member, setMember] = React.useState<IMember | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUser(member);
    onClose()
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => onClose()}>
        <ModalOverlay />
        <ModalContent marginTop={"25px"} marginBottom={"20px" }maxW={"none"} width={"1200px"} as="form" onSubmit={handleSubmit}>
          <ModalHeader>Cadastro de membro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
                <FormControl id="name" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" name="name" value={member?.name} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" name="password" value={member?.password} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <Flex> 
                <FormControl id="phone" marginRight={"10px"} marginBottom={"10px"}>
                <FormLabel>Telefone</FormLabel>
                <Input type="number" name="phone" value={member?.phone} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="email">
                <FormLabel>E-mail</FormLabel>
                <Input type="email" name="email" value={member?.email} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="address" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Endereço</FormLabel>
                    <Input type="text" name="address" value={member?.address} onChange={handleInputChange} />
                </FormControl>
                <FormControl  width={"200px"} justifySelf={"left"} id="addressNumber">
                    <FormLabel>Número</FormLabel>
                    <Input type="number" name="addressNumber" value={member?.addressNumber} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="neighborhood" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Bairro</FormLabel>
                    <Input type="text" name="neighborhood" value={member?.neighborhood} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="city">
                    <FormLabel>Cidade</FormLabel>
                    <Input type="text" name="city" value={member?.city} onChange={handleInputChange} />
                 </FormControl>
            </Flex>
            <Flex>
                <FormControl  id="zipcode" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>CEP</FormLabel>
                    <Input type="number" name="zipcode" value={member?.zipcode} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="rg">
                    <FormLabel>RG</FormLabel>
                    <Input type="text" name="rg" value={member?.rg} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="cpf" marginRight={"10px"} marginBottom={"10px"}>
                <FormLabel>CPF</FormLabel>
                <Input type="text" name="cpf" value={member?.cpf} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="dateOfBaptism">
                <FormLabel>Data de Batismo</FormLabel>
                <Input type="date" name="dateOfBaptism" value={member?.dateOfBaptism} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="dateOfBirth" marginRight={"10px"} marginBottom={"10px"}>
                <FormLabel>Data de Aniversário</FormLabel>
                <Input type="date" name="dateOfBirth" value={member?.dateOfBirth} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="job">
                <FormLabel>Trabalho</FormLabel>
                <Input type="text" name="job" value={member?.job} onChange={handleInputChange} />
                </FormControl>
            </Flex>
            <Flex>
                <FormControl id="maritalStatus" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Estado Civil</FormLabel>
                    <Input type="text" name="maritalStatus" value={member?.maritalStatus} onChange={handleInputChange} />
                </FormControl>
                <FormControl id="spousesName" marginRight={"10px"} marginBottom={"10px"}>
                    <FormLabel>Nome do Conjuge</FormLabel>
                    <Input type="text" name="spouseName" value={member?.spouseName} onChange={handleInputChange} />
                </FormControl>
            </Flex>    
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Salvar
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MemberForm;
