import React, { useState } from 'react';
import 'bootstrap-css-only';
import './transfer.css';
import { Modal } from 'react-bootstrap';
import Confirm from './Confirm';

const Transfers = ({userData}) => {

    const [cuentaDestino, setCuentaDestino] = useState('');
    const [importe, setImporte] = useState('');   
    const [isVisible, setVisible] = useState(false);
    const {cuentas} = userData;

    const showModal = e => {
        e.preventDefault();
        setVisible(true)
    };
    const closeModal = e => {
        e.preventDefault();
        setVisible(false)
    };    

    const handleChangeCuenta = e =>{
        e.preventDefault();
        if(!(isNaN(e.target.value) || e.target.value.includes('.'))){
            setCuentaDestino(e.target.value);
        }
    }

    const handleChangeImporte = e =>{
        e.preventDefault();
        // Se valida si se ingreso un . y que solo tenga 2 numeros o menos luego del punto.
        let decimalValido = e.target.value.includes(".") ? e.target.value.split(".") : [] ;
        decimalValido = decimalValido.length > 1 ? decimalValido[1].length > 2 : false;
        //----
        if(!(isNaN(e.target.value) || decimalValido)){
            setImporte(e.target.value);
        }
    }

    const listCuentas = () =>{
        return cuentas ? cuentas.map(c => <option key={c.cuenta}>{c.cuenta}</option>) : null ;
    }

    return(
        <div className="card posicionamiento">
            <form>
                <label>Cuenta Origen</label>
                <select className="form-control">
                    {listCuentas()}
                </select>
                <br/>
                <label>Cuenta de destino</label>
                <input className="form-control" value={cuentaDestino} type="text" onChange={handleChangeCuenta}/>
                <br/>
                <label>Importe</label>
                <div class="input-group mb-3">                    
                    <span class="input-group-text">$</span>
                    <input type="text" value={importe} onChange={handleChangeImporte} class="form-control" aria-label="Amount (to the nearest dollar)"/>
                </div>
                <br/>
                <label>Referencia</label>
                <textarea className="form-control"  />
                <br/>
                <button className="btn btn-primary form-control" onClick={showModal}>Modallll</button>
                <Modal keyboard={closeModal} onHide={ () => setVisible(false)} animation={false} show={isVisible} size="lg" centered >
                    <Modal.Body>
                        <Confirm close={closeModal}/>
                    </Modal.Body>
                </Modal>
            </form>
        </div>
    );
}

export default Transfers;