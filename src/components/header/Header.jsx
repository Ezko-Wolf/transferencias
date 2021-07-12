import React from 'react';
import { useHistory } from 'react-router';
import 'bootstrap-css-only';

const Header = () =>{
    const history = useHistory();

    const handleLogOut = e =>{
        e.preventDefault();
        localStorage.removeItem('usrToken');
        console.log(history)
        history.go("/");
    }

    return (
        <button className="btn btn-dark mt-2 ml-1" onClick={handleLogOut}>
            Cerrar sesion
        </button>
    );
}

export default Header;