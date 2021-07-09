import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'


const Login = () => {

const [userData, setUserData] = useState({userName: '', pass: ''});

    const handleSend = e => {
        e.preventDefault();
        const { userName, pass } = userData;

        if (userName === null || userName === "" || pass === null || pass === "") {
            alert("Debes completar los campos");
        } else {
            alert('ahora llamamos al login')
        }
    };

    const handleChange = e => {
        if(e.target.id === 'userName'){
            setUserData({
                userName: e.target.value
            });
        }else if(e.target.id == 'inputPass'){
            setUserData({
                pass: e.target.value
            });
        }    
    };

    return(
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"          
        >
          <div>
        <section>
            <form>
                <label htmlFor="userName">Ingrese su usuario</label>
                <br />
                <input type="text" name="userName" id="userName" value = {userData.userName} onChange = {handleChange}/>
                <br />
                <label htmlFor="inputPass">Ingrese su contraseña</label>
                <br />
                <input type="password" name="pass" id="inputPass" value = {userData.pass} onChange = {handleChange}/>
                <br />
                <button onClick={handleSend}>Ingresar</button>
            </form>
        </section>
        </div>
        </Grid>
        
    );
}

export default Login;