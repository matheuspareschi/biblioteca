import { ChatsTeardrop } from "phosphor-react";
import "./header.css"

const Header = () => {
    return (
        <div className="header__container">
            <ChatsTeardrop size={32} color="#2ec4b6" weight="duotone" />
            <div className="header__title"> 
                <p> Biblioteca </p>
                <p> Cultura em Profusão</p>
            </div>
        </div>
    );
}

export default Header();