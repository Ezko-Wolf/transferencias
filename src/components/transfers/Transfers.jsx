import React, { Fragment, useState } from 'react';
import 'bootstrap-css-only';
import './transfer.css';
import { Modal } from 'react-bootstrap';
import Confirm from './Confirm';
import Header from '../header/Header';
import Error from '../generics/Error';
import { getAccount, transfer } from '../../services/api';

const Transfers = ({userData, handleTransfer}) => {

    const [numeroCuentaOrigen, setNumeroCuentaOrigen] = useState('');
    const [cuentaOrigen, setCuentaOrigen] = useState({});
    const [numeroCuentaDestino, setNumeroCuentaDestino] = useState('');
    const [cuentaDestino, setCuentaDestino] = useState({});
    const [importe, setImporte] = useState('');   
    const [reference, setReference] = useState('');
    const [isVisible, setVisible] = useState(false);    
    const [isError, setError] = useState({error: false, message: ''});
    const {cuentas} = userData;

    const handleConfirm = async e => {
        e.preventDefault();
        if(numeroCuentaDestino !== '' && importe !== '' && reference !== '' && numeroCuentaOrigen !== '' && validAccount()){
            let targetAccount = await getAccount(+numeroCuentaDestino);
            if(targetAccount === 404){
                setError({error: true, message: 'Cuenta inexistente'});
                clearError();                
            }else if(targetAccount === 401){
                setError({error: true, message: 'Debe volver a logearse'});
                clearError(); 
            }else{
                setCuentaDestino(targetAccount);
                setVisible(true);
            }
        }else{
            setError({error: true, message: 'Debe completar todos los campos'});
            clearError();
        }
    };

    const validAccount = () =>{
        let result = cuentas.find( c => c.cuenta === numeroCuentaDestino);
        return result ? false : true;
    }

    const clearError = () => {
        setTimeout(() => {
            setError({
                error: false,
                message: ''
            });
        }, 5000);
    }

    const clearData = () => {
        setNumeroCuentaOrigen('');
        setNumeroCuentaDestino('');
        setCuentaDestino({});
        setImporte('');
        setReference('');
    }

    const closeModal = e => {
        e.preventDefault();
        setVisible(false);
    };    

    const handleChangeInputAccount = e => {
        e.preventDefault();
        if(!(isNaN(e.target.value) || e.target.value.includes('.'))){
            setNumeroCuentaDestino(e.target.value);
        }
    }

    const handleChangeInputAmount = e => {
        e.preventDefault();
        // Se valida si se ingreso un . y que solo tenga 2 numeros o menos luego del punto.
        let decimalValido = e.target.value.includes(".") ? e.target.value.split(".") : [] ;
        decimalValido = decimalValido.length > 1 ? decimalValido[1].length > 2 : false;
        //----
        if(!(isNaN(e.target.value) || decimalValido)){
            setImporte(e.target.value);
        }
    }

    const listCuentas = () => {
        return cuentas 
                ? cuentas.map(c => <option key={c.cuenta} value={c.cuenta}>{c.cuenta}</option>) 
                : null;
    }

    const handleOriginAccount = e => {
        e.preventDefault();
        if(e.target.value !== ''){
            setNumeroCuentaOrigen(+e.target.value);
            setCuentaOrigen(cuentas.find( c => c.cuenta === +e.target.value));
        }
        if(e.target.value === '' && numeroCuentaOrigen !== ''){
            setError({error: true, message: 'Seleccione cuenta de origen.'});
            clearError();
            setNumeroCuentaOrigen('');
        }
    }
    
    const handleChangeReference = e => {
        e.preventDefault();
        if(e.target.value.length <= 255){
            setReference(e.target.value);
        }
    }

    const confirmTransfer = async () => {
        let dataTransfer = {
            targetAccount: cuentaDestino.user,
            originAccount: numeroCuentaOrigen,
            targetAccountNumber: cuentaDestino.account.cuenta,
            badge: cuentaDestino.account.moneda,
            amount: importe,
            reference: reference,
            date: new Date().toLocaleString()
        };        
        let response = await transfer(dataTransfer);
        if(response.status ===  200){
            handleTransfer(dataTransfer);
            clearData();
        }else{
            setError({error: true, message: 'Error al transferir, intente mas tarde.'});
            clearError();
        }
        
    }

    const viewDataOriginAccount = () => {
        let originAccount = cuentas.find(c => c.cuenta === numeroCuentaOrigen)
        return (
            <div className="col-12 mb-3 secondaryCard">
                <div className="row justify-content-evenly align-items-center" style={{backgroundColor:'lightgrey'}}>
                    <div className="col-4 centerText">
                        <span>Saldo</span>
                        <br/>
                        <span style={{fontSize: '20px'}}>${originAccount.saldo}</span>
                    </div>
                    <div className="col-4 centerText">
                        <span>Divisa</span>
                        <br/>
                        <span style={{fontSize: '20px'}}> {originAccount.moneda}</span>
                    </div>    
                </div>
            </div>            
        );
    }

    return(
        <Fragment>
            <Header/>   
            <div className="card primaryCard">
                {
                    numeroCuentaOrigen 
                    ? viewDataOriginAccount()
                    : ''
                }
                <div className="row justify-content-around">                    
                    <form className="col-11">
                        <label className="pt-3">Cuenta Origen</label>
                        <select className="form-control" onClick={handleOriginAccount}>
                            <option value=''>Seleccionar</option>
                            {listCuentas()}
                        </select>
                        <br/>
                        <label>Cuenta de destino</label>
                        <input className="form-control" value={numeroCuentaDestino} type="text" onChange={handleChangeInputAccount}/>
                        <br/>
                        <label>Importe</label>
                        <div className="input-group mb-3">                    
                            <span className="input-group-text">$</span>
                            <input type="text" value={importe} onChange={handleChangeInputAmount} className="form-control"/>
                        </div>
                        <br/>
                        <label>Referencia</label>
                        <textarea className="form-control" value={reference} onChange={handleChangeReference}/>
                        <br/>
                        <button className="btn btn-primary form-control mb-3" onClick={handleConfirm}>Transferir</button>
                        { isError.error ? <Error message={isError.message} /> : '' }
                        <Modal keyboard={closeModal} onHide={ () => setVisible(false)} animation={false} show={isVisible} size="lg" centered >
                            <Modal.Body>
                                <Confirm 
                                    confirmTransfer={confirmTransfer} 
                                    reference={reference} 
                                    cuentaDestino={cuentaDestino} 
                                    cuentaOrigen={cuentaOrigen} 
                                    importe={importe} 
                                    close={closeModal}/>
                            </Modal.Body>
                        </Modal>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Transfers;