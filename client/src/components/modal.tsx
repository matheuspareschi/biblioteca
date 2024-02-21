import React from 'react'
import { Button, Checkbox, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"

interface IModal {
    text: string,
    title: string,
    checkboxText: string,
    onClose: () => void,
    isOpen: boolean,
    onClick: () => void,
    loanStatus?: boolean
}

export const ModalComponent = ({checkboxText, isOpen, onClick, onClose, text, title, loanStatus}: IModal) => {
    const [checkbox, setCheckbox] = React.useState(false)
    const toast = useToast()
    
    const feedbackStatus = () => {
      if(loanStatus === false)
      return toast({
        title: 'Empréstimo realizado',
        description: "Ótima leitura",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      if(loanStatus === true)
      return toast({
        title: 'Houve um problema',
        description: "Tente de novo mais tarde",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    return (
      <>  
        <Modal isOpen={isOpen} onClose={() => {onClose(); setCheckbox(false)}}>
          <ModalOverlay bgColor="#09216E50"/>
          <ModalContent borderRadius="10px" bgColor="white">
            <ModalCloseButton mt={"7px"}width={"20px"}  border={"none"} padding="0.3rem 1rem" borderRadius={"10px"} background={"#013d37"} color="white" fontWeight={"500"} />
            <ModalHeader fontSize={"1.4rem"} fontWeight={"500"}>{title}</ModalHeader>
            <ModalBody>
              <Text lineHeight={"30px"} fontSize={"1.1rem"}>{text}</Text>
              <Flex my={"10px"}>
                <input type={"checkbox"} checked={checkbox} onClick={() => {setCheckbox(!checkbox)}}/>
                <Text ml="10px">{checkboxText}</Text>
              </Flex>
              { checkbox 
                ? <Button colorScheme='teal' mb={"30px"} onClick={() => {onClick(); feedbackStatus(); onClose()}} border={"none"} padding="0.5rem 1rem" borderRadius={"10px"} background={"#013d37"} color="white" fontWeight={"500"} fontSize={"1.1rem"}>Pegar emprestado</Button>
                : <Button mb={"30px"} border={"none"} padding="0.5rem 1rem" borderRadius={"10px"} background={"#013d3730"} color="white" fontWeight={"500"} fontSize={"1.1rem"}>Pegar emprestado</Button>
              }
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }