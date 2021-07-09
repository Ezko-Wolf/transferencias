import React, { useState } from 'react';
import 'bootstrap-css-only';
import './transfer.css';
import Error from '../generics/Error';

const Transfers = () => {

    const [isError, setError] = useState({error: false, message: ''});
    const [cuenta, setCuenta] = useState('');
    const [importe, setImporte] = useState('');

    const handleChangeCuenta = e =>{
        e.preventDefault();
        if(isNaN(e.target.value) || e.target.value.includes('.')){
            setError({
                error: true,
                message: 'Ingrese cuenta valida'
            });
            setTimeout( () => {
                setError({
                    error: false,
                    message: ''
                });
            }, 2000);
        }
        else{
            setCuenta(e.target.value);
        }
    }

    const handleChangeImporte = e =>{
        e.preventDefault();
        // Se valida si se ingreso un . y que solo tenga 2 numeros o menos luego del punto.
        let decimalValido = e.target.value.includes(".") ? e.target.value.split(".") : [] ;
        decimalValido = decimalValido.length > 1 ? decimalValido[1].length > 2 : false;
        //----
        if(isNaN(e.target.value) || decimalValido){
            setError({
                error: true,
                message: 'Ingrese importe valido'
            });
            setTimeout( () => {
                setError({
                    error: false,
                    message: ''
                });
            }, 2000);
        }
        else{
            setImporte(e.target.value);
        }
    }

    return(
        <div className="card posicionamiento">
            <form>
                <label>Cuenta Origen</label>
                <select className="form-control">
                    <option>
                        opt1
                    </option>
                    <option>
                        optN
                    </option>
                </select>
                <br/>
                <label>Cuenta de destino</label>
                <input className="form-control" value={cuenta} type="text" onChange={handleChangeCuenta}/>
                <br/>
                <label>Importe</label>
                <input className="form-control" value={importe} type="text" onChange={handleChangeImporte}/>
                <br/>
                <label>Referencia</label>
                <textarea className="form-control"  />
                { isError.error ? <Error message={isError.message} /> : '' }    
            </form>
        </div>
    );
}

export default Transfers;