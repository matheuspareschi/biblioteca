import { useEffect, useState } from "react";
import "../userDashboard/userDashboard.css";
import { UserPlus } from "phosphor-react";
import BooksView from "../../../components/book/booksView/index";
import AdminHomepage from "../adminHomepage";
import BookReg from "../../../components/book/booksReg";

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
        <BookReg setHide={setHide} setAdded={setAdded}/>
      </div>

      <BooksView added={added} setAdded={setAdded} />

    </div>
  );
}


export default UserDashboard;
