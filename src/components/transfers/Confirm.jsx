import React from 'react';
import 'bootstrap-css-only';
import { useHistory } from 'react-router-dom';

const Confirm = ({close, cuentaDestino, importe, reference, cuentaOrigen, confirmTransfer}) => {
    const {user, account} = cuentaDestino;
    const history = useHistory();

    const confirmData = e => {
        e.preventDefault();
        confirmTransfer();
        history.push('/ticket');
    }
    return(
        <div>
            <label>Cuenta Origen</label>
            <input disabled className="form-control" value={cuentaOrigen} type="text"/>
            <br/>
            <label>Destinatario:</label>
            <input disabled className="form-control" value={`${user?.nombre} ${user?.apellido}`} type="text"/>
            <br/>
            <label>Cuenta de destino</label>
            <input disabled className="form-control" value={account.cuenta} type="text"/>
            <br/>
            <label>Importe</label>
            <div className="input-group mb-3">                    
                <span className="input-group-text">$</span>
                <input disabled type="text" value={importe} className="form-control"/>
                <span className="input-group-text">{account.moneda}</span>
            </div>
            <br/>
            <label>Referencia</label>
            <textarea disabled className="form-control" value={reference}/>
            <br/>
            <button className='btn btn-primary' onClick={confirmData}>Confirmar</button>
            <button className='btn btn-secondary' onClick={close}>Cancelar</button>
        </div>
    );
}

export default Confirm; 