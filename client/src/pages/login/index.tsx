import React from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Flex, Input, Text } from '@chakra-ui/react'
import { UseLogin } from "./useLogin.ts";

const Login = () => {
  const {err, setPassword, setErr, setEmail, validateUser} = UseLogin()

  return (
    <Flex direction={'column'} alignItems={'center'} height='100vh' justifyContent={'center'}>
      <Text color={"#323234"} fontWeight={"700"} fontSize="45" marginBottom="0px"> 
        BIBLIOTECA DA COMUNIDADE BETESDA 
      </Text>      
      <Text mt='5px' fontSize={'1.3rem'} > 
        Para realizar seu cadastro consultar o Matheus Candido ou Pastor Sérgio
      </Text>
      <Flex 
        direction={'column'} 
        bg={'#09216E'}
        width={"400px"}
        height={"fit-content"}
        padding={"20px 20px"}
        borderRadius={"8px"}
        justifySelf={"center"}
        mt={"20px"}
      >
        <Text fontSize={"20"} fontWeight={"400"} color={"#E6E9F2"}> E-mail </Text>
        <Input
          mt="4px"
          type="email"
          padding={"5px 10px"}
          borderRadius={"8px"}
          fontSize={"15"}
          width={{base: '',  lg: "350px"}}
          color="#2B2B2C"
          _placeholder={{color: "#2B2B2C"}}
          border="none"
          placeholder="Digite aqui seu e-mail"
          bg="#E6E9F2"
          onChange={(e) => {
            setEmail(e.target.value)
            setErr(false)
          }}
        />
       <Text fontSize={"20"} mt={"15px"}fontWeight={"400"} color={"#E6E9F2"}> Senha </Text>
        <Input
          mt="3px"
          type="password"
          padding={"5px 10px"}
          borderRadius={"8px"}
          fontSize={"15"}
          width={{base: '',  lg: "350px"}}
          color="#2B2B2C"
          bg="#E6E9F2"
          _placeholder={{color: "#2B2B2C"}}
          border="none"
          placeholder="Digite aqui seu e-mail"
          onChange={(e) => {
            setPassword(e.target.value)
            setErr(false)
          }}
          marginBottom={"20px"}
        />
        {err && 
          <Alert status='error' borderRadius={"10px"}>
            <AlertIcon />
            <AlertTitle textColor={"#09216E"}> Usuário ou senha inválidos </AlertTitle>
          </Alert>}
      </Flex>
      <Button 
          width={'100px'}
          padding={"10px"}
          alignSelf={"center"}
          mt="30px"
          mb="0px"
          onClick={() => validateUser()}
          borderRadius={"8px"}
          border="none"
          bg="#00524E"
          color={"#E6E9F2"}
          fontWeight={"700"}
          fontSize={"17"}
          colorScheme='teal'
        >
          Acessar
        </Button>
    </Flex>
  );
};

export default Login;
