import React, { useState } from 'react';
import './login.css';
import 'bootstrap-css-only';
import { login } from '../../services/apiLogin';
import Error from '../generics/Error'


const Login = () => {

    const [userData, setUserData] = useState({userName: '', pass: ''});
    const [isError, setError] = useState({error: false, message: ''});

    const clearError = () => {
        setTimeout(() => {
            setError({
                error: false,
                message: ''
            });
        }, 5000);
    }

    const handleSend = e => {
        e.preventDefault();
        const { userName, pass } = userData;

        if (userName === null || userName === "" || pass === null || pass === "") {
            setError({
                error: true,
                message: 'Debe completar todos los campos'
            });
            clearError();
        } else {
            const result = login(userData);
            if(result.statusCode === 200){
                console.log(result.body);
                //localStorage.setItem('usrToken', JSON.stringify(result.body));
            }               
            else if(result.statusCode === 401){
                setError({
                    error: true,
                    message: result.message
                });
                clearError();
            }                
        }
    };

    const handleChange = e => {
        e.preventDefault();
        if(e.target.id === 'userName'){
            setUserData({
                ...userData,
                userName: e.target.value
            });
        }else if(e.target.id === 'inputPass'){
            setUserData({
                ...userData,
                pass: e.target.value
            });
        }    
    };

    return(
        <div className="card posicionamientoLogin">
        <section className = "card-body">
          <form>
            <label htmlFor="userName">Ingrese su usuario</label>
            <br />
            <input type="text" name="userName" id="userName" value = {userData.userName} onChange = {handleChange} className="form-control"/>
            <br />
            <label htmlFor="inputPass">Ingrese su contraseña</label>
            <br />
            <input type="password" name="pass" id="inputPass" value = {userData.pass} onChange = {handleChange} className="form-control"/>
            <br />
            { isError.error ? <Error message={isError.message} /> : '' }
            <button className="btn btn-primary form-control" onClick={handleSend}>Ingresar</button>
          </form>
        </section>
      </div>
    );
}

export default Login;