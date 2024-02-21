import React, { useState } from "react";
import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IBook } from "../../../../comons/interfaces";

interface IProps {
    isOpen: boolean, 
    onClose: () => void
}

export function AddBookModal({isOpen, onClose}: IProps) {
  const { onOpen } = useDisclosure();
  const [formInput, setFormInput] = useState<IBook>({
    title: "",
    author: "",
    genre: "",
    quantity: 0,
    owner: "",
    pending: 0, 
    idBook: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormInput({
      title: "",
      author: "",
      genre: "",
      quantity: 0,
      owner: "",
      pending: 0,
      idBook: 1
    });
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Livro</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
                <Flex>
                    <FormControl marginRight={"10px"} marginBottom={"10px"}>
                        <FormLabel>Título</FormLabel>
                        <Input name="title" value={formInput.title} onChange={handleInputChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Autor</FormLabel>
                        <Input name="author" value={formInput.author} onChange={handleInputChange} />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl marginRight={"10px"} marginBottom={"10px"} mt={4}>
                        <FormLabel>Gênero</FormLabel>
                        <Input name="genre" value={formInput.genre} onChange={handleInputChange} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Quantidade</FormLabel>
                        <Input name="quantity" value={formInput.quantity} onChange={handleInputChange} type="number" />
                    </FormControl>
                </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} type="submit">
                Salvar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
