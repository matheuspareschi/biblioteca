import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../comons/context/user/index.tsx";
import axios from "axios";

interface IUseLogin {
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
    setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
    err: boolean;
    setErr: React.Dispatch<React.SetStateAction<boolean>>
    validateUser: () => void
}

export const UseLogin = (): IUseLogin => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [err, setErr] = useState<boolean>();
    const {user, setUser} = useUser()
    let navigate = useNavigate()

    async function validateUser() {
        await axios.post("http://localhost:3002/api/consulteUser", 
        { email: email, password: password, }).then(
            (data) => { 
                if(data.data.length === 0) 
                return setErr(true)

                setUser(data.data[0]); 
                return navigate("/library-collection")  }
        )
    }

  return (
    {
        setEmail,
        setPassword,
        err,
        setErr,
        validateUser
    }
  )
}

