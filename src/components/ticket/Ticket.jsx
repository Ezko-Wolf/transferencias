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
            <div className="card posicionamientoTicket">
                    <div className="card-title">
                        <h3>Resumen: </h3>
                    </div>
                    <hr/>
                <section className="card-Body">                    
                    <div className="row pt-3 justify-content-evently">
                        <label className="col-5 ">Numero de transferencia</label>
                        <label className="col-5  textRigth">{Math.floor(Math.random()*10000)}</label>            
                    </div>
                    <hr/>
                    <div className="row justify-content-evently">
                        <label className="col-5  ">Cuenta origen</label>
                        <label className="col-5  textRigth">{originAccount}</label>
                    </div>
                    <hr/>
                    <div className="row justify-content-evently">
                        <label className="col-5 ">Destinatario</label>
                        <label className="col-5  textRigth">{`${nombre} ${apellido}`}</label>
                    </div>
                    <hr/>
                    <div className="row justify-content-evently">
                        <label className="col-5 ">Cuenta de destino</label>
                        <label className="col-5  textRigth">{targetAccountNumber}</label>
                    </div>
                    <hr/>
                    <div className="row justify-content-evently">
                        <label className="col-5 ">Importe</label>
                        <label className="col-5  textRigth">{badge}:{amount}</label>
                    </div>
                    <hr/>
                    <div className="row justify-content-evently">
                        <label className="col-5 ">Referencia</label>
                        <label className="col-5  textRigth">{reference}</label>
                    </div>
                    <hr/>
                    <div className="row pb-3 justify-content-evently">
                        <label className="col-5 ">Fecha</label>
                        <label className="col-5  textRigth">{date}</label>
                    </div>
                        
                </section> 
                <button className="btn btn-primary" onClick={handleBack}>
                    Volver
                </button>           
            </div>
        </Fragment>
    );
}

export default Ticket;