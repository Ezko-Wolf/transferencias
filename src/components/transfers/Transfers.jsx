import React, { useState } from 'react';
import 'bootstrap-css-only';
import './transfer.css';
import { Modal } from 'react-bootstrap';
import Confirm from './Confirm';

const Transfers = () => {

    const [cuenta, setCuenta] = useState('');
    const [importe, setImporte] = useState('');   
    const [isVisible, setVisible] = useState(false);

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
            setCuenta(e.target.value);
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