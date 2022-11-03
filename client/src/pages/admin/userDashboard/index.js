import { useEffect, useState } from "react";
import "../userDashboard/userDashboard.css";
import { UserPlus } from "phosphor-react";
import UserReg from "../../../components/user/userReg/userReg";
import UserView from "../../../components/user/userView/userView"
import AdminHomepage from "../adminHomepage";

function UserDashboard({viewAllUser}) {
  const [hide, setHide] = useState("none");
  const [added, setAdded] = useState(0)
  
  const onClickCreateUser = () => {
    setHide("");
  }

  useEffect(() => {
    if (added === true) {
      setAdded(0)
    }
  }, [added])
  
  return (
    <div className="userDashboard___container">
      <AdminHomepage selected={"user"}/>

      <button className="userDashboard___createUserButton" onClick={() => onClickCreateUser()}>
        <UserPlus size={25} color="#cbf3f0" weight="duotone" />
        <p> Criar Usuário </p> 
      </button>

      <div className="userDashboard___userReg" style={{display: hide}}> 
        <UserReg setHide={setHide} setAdded={setAdded}/>
      </div>

      <UserView added={added} setAdded={setAdded} />

    </div>
  );
}


export default UserDashboard;
