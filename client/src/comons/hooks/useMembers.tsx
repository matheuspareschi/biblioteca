import axios from "axios"
import React, { useEffect, useState } from "react"
import { IMember } from "../interfaces"
import { useToast } from "@chakra-ui/react"

interface IUseMembers {
    getMembers:  ()  => void,
    alterMember: (member: IMember) => void
    members: IMember[],
    success: boolean,
    createMember: (member: IMember) => void
    getMemberName: (memberId: number) => String
}

const useMembers = (): IUseMembers => {
    const [members, setMembers] = useState<IMember[]>();
    const [success, setSuccess] = useState<boolean>();
    const toast = useToast()

    const getMembers = async () => {
        const data = await axios.get("http://localhost:3002/api/getAllUser")
    
        setMembers(data.data)
    }

    const createMember = async (member: IMember) => {
        axios.post("http://localhost:3002/api/createUser", member)
        .then(() => {
            feedbackStatus({title: "Usuário adicionado", description: "", success: true}); 
            setSuccess(!success)})
        .catch(() => feedbackStatus({title: "Houve algum erro", description: "Tente novamente mais tarde", success: false}))
    }
    
    const alterMember = async (member: IMember) => {
        axios.post("http://localhost:3002/api/alterUser", member)
        .then(() => {
            feedbackStatus({title: "Usuário alterado", description: "", success: true}); 
            setSuccess(!success)})
        .catch(() => feedbackStatus({title: "Houve algum erro", description: "Tente novamente mais tarde", success: false}))
    }

    const feedbackStatus = ({title, description, success}: {title: string, description: string, success: boolean}) => {
        if(success === true)
        return toast({
          title: title,
          description: description,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
  
        if(success === false)
        return toast({
          title: title,
          description: description,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    }

    const getMemberName = (memberId: number) => {
        const memberName = members.find(member => member.idMember === memberId);

        return memberName.name
    }

    useEffect(() => {
        getMembers()
    }, [success])
    
    return ({
        alterMember,
        createMember,
        getMembers,
        members,
        success,
        getMemberName
    })
}

export default useMembers