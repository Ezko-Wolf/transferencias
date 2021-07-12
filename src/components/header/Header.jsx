import React from 'react';
import { useHistory } from 'react-router';

const Header = () =>{
    const history = useHistory();

    const handleLogOut = e =>{
        e.preventDefault();
        localStorage.removeItem('usrToken');
        console.log(history)
        history.go("/");
    }

    return (
        <button onClick={handleLogOut}>
            Cerrar sesion
        </button>
    );
}

export default Header;