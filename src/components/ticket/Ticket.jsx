import React, { Fragment } from 'react';
import 'bootstrap-css-only';
import './ticket.css';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';

const Ticket = ({transfer}) => {
    const {targetAccount, originAccount, targetAccountNumber, badge, amount, reference, date} = transfer;
    const {nombre , apellido} = targetAccount;
    const history = useHistory();

    const handleBack = e => {
        e.preventDefault();
        history.push("/transfers");
    }

    return (
        <Fragment>
            <Header/>
            <div>
                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2">Numero de transferencia</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{Math.floor(Math.random()*10000)}</label>            
                </div>

                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2 ">Cuenta origen</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{originAccount}</label>
                </div>

                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2">Destinatario</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{`${nombre} ${apellido}`}</label>
                </div>

                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2">Cuenta de destino</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{targetAccountNumber}</label>
                </div>

                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2">Importe</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{badge}:{amount}</label>
                </div>

                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2">Referencia</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{reference}</label>
                </div>

                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 col-xl-2">Fecha</label>
                    <label className="col-6 col-md-4 col-xl-2 textRigth">{date}</label>
                </div>
                <button onClick={handleBack}>
                    Volver
                </button>
            </div>
        </Fragment>
    );
}

export default Ticket;