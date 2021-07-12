import React from 'react';
import 'bootstrap-css-only';
import { exchangeRate } from '../../services/api'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Confirm = ({close, cuentaDestino, importe, reference, cuentaOrigen, confirmTransfer}) => {
    const [convertedAmount, setConvertedAmount] = useState({convert:false, amount:0, divisa:'', exchange:0});
    const {user: targetUser, account: targetAccount} = cuentaDestino;
    const {moneda: monedaOrigen, cuenta: numeroCuentaOrigen} = cuentaOrigen
    const history = useHistory();

    const confirmData = async e => {
        e.preventDefault();
        await confirmTransfer();
        history.push('/ticket');
    }

    const convertAmount = exchangeRateToday => {
        let importeDestino = importe;
        let arbitrajes = exchangeRateToday[`${monedaOrigen}`]
        if(monedaOrigen !== targetAccount.moneda){
            importeDestino = importe / arbitrajes[`${targetAccount.moneda}`];
            setConvertedAmount({convert:true, amount:importeDestino.toFixed(2), divisa:targetAccount.moneda, exchange:arbitrajes[`${targetAccount.moneda}`]});
        }              
    }

    useEffect( () => {
        exchangeRate().then( exchange => convertAmount(exchange) );
    },[]);

    return(
        <div>
            <label>Cuenta Origen</label>
            <input disabled className="form-control" value={numeroCuentaOrigen} type="text"/>
            <br/>
            <label>Destinatario:</label>
            <input disabled className="form-control" value={`${targetUser?.nombre} ${targetUser?.apellido}`} type="text"/>
            <br/>
            <label>Cuenta de destino</label>
            <input disabled className="form-control" value={targetAccount?.cuenta} type="text"/>
            <br/>
            <label>Importe</label>
            <div className="input-group mb-3">                    
                <span className="input-group-text">$</span>
                <input disabled type="text" value={importe} className="form-control"/>
                <span className="input-group-text">{monedaOrigen}</span>
            </div>
            <br/>
            {
                convertedAmount.convert
                ? (
                    <>
                        <label>Importe destino</label>
                        <div className="input-group mb-3">                    
                            <span className="input-group-text">$</span>
                            <input disabled type="text" value={convertedAmount.amount} className="form-control"/>
                            <span className="input-group-text">{convertedAmount.divisa}</span>
                            <span className="input-group-text">Arbitraje: {convertedAmount.exchange}</span>
                        </div>
                        <br/>
                    </>
                )
                : ''
            }
            
            <label>Referencia</label>
            <textarea disabled className="form-control" value={reference}/>
            <br/>
            <button className='btn btn-primary' onClick={confirmData}>Confirmar</button>
            <button className='btn btn-secondary' onClick={close}>Cancelar</button>
        </div>
    );
}

export default Confirm; 