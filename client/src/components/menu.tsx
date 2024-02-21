import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useUser } from "../comons/context/user";
import { useNavigate } from "react-router-dom";

interface IProps {
    backgroundColor: string
}

const Menu = ({backgroundColor}: IProps) => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
    <Flex bgColor={backgroundColor} paddingX={"0.5rem"} paddingY={"2"} marginTop={"20px"} marginBottom={"20px"} width={"40%"} borderRadius={"5px"} justifyContent={"space-around"}>
        {user.levelAccess === 1  && 
        <> 
            <Text textColor={"#013d37"} fontWeight={"700"} onClick={() => {navigate("/members-screen")}}>Membros</Text> 
            <Text textColor={"#013d37"} fontWeight={"400"}>|</Text>
        </>
        }
        <Text textColor={"#013d37"} fontWeight={"700"} onClick={() => {navigate("/user-books-screen")}}>Meus Livros</Text>
        <Text textColor={"#013d37"} fontWeight={"400"}>|</Text>
        <Text textColor={"#013d37"} fontWeight={"700"} onClick={() => {navigate("/library-collection")}}>Acervo</Text>
        <Text textColor={"#013d37"} fontWeight={"400"}>|</Text>
        <Text textColor={"#013d37"} fontWeight={"700"} onClick={() => {navigate("/loan-screen")}}>Meus Empréstimos</Text>
    </Flex>
    )
}

export default Menu