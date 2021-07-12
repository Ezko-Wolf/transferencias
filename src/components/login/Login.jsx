import React, { useState } from 'react';
import './login.css';
import 'bootstrap-css-only';
import { login } from '../../services/apiLogin';
import Error from '../generics/Error'
import { useHistory } from 'react-router-dom';


const Login = ({handleUserData}) => {

    const [userData, setUserData] = useState({userName: '', pass: ''});
    const [isError, setError] = useState({error: false, message: ''});
    const history = useHistory();

    const clearError = () => {
        setTimeout(() => {
            setError({
                error: false,
                message: ''
            });
        }, 5000);
    }

    const handleSend = async e => {
        e.preventDefault();
        const { userName, pass } = userData;

        if (userName === null || userName === "" || pass === null || pass === "") {
            setError({
                error: true,
                message: 'Debe completar todos los campos'
            });
            clearError();
        } else {
            const result = await login(userData);
            if(result){
                localStorage.setItem('usrToken', result.token);
                handleUserData(result);
                history.push("/transfers");
            }               
            else {
                setError({
                    error: true,
                    message: 'Usuario o contraseña incorrecta'
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
            <button className="btn btn-primary form-control" onClick={handleSend}>Ingresar</button>            
            { isError.error ? <Error message={isError.message} /> : '' }
          </form>
        </section>
      </div>
    );
}

export default Login;