import React from 'react';
import 'bootstrap-css-only';
import './ticket.css';

const Ticket = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <label className="col-6 col-md-4 col-xl-2">Numero de transferencia</label>
                <label className="col-6 col-md-4 col-xl-2 textRigth">4252345</label>            
            </div>

            <div className="row justify-content-center">
                <label className="col-6 col-md-4 col-xl-2 ">Cuenta origen</label>
                <label className="col-6 col-md-4 col-xl-2 textRigth">3245345</label>
            </div>

            <div className="row justify-content-center">
                <label className="col-6 col-md-4 col-xl-2">Cuenta de destino</label>
                <label className="col-6 col-md-4 col-xl-2 textRigth">345345324</label>
            </div>

            <div className="row justify-content-center">
                <label className="col-6 col-md-4 col-xl-2">Importe</label>
                <label className="col-6 col-md-4 col-xl-2 textRigth">$234532453</label>
            </div>

            <div className="row justify-content-center">
                <label className="col-6 col-md-4 col-xl-2">Referencia</label>
                <label className="col-6 col-md-4 col-xl-2 textRigth">prueba</label>
            </div>

            <div className="row justify-content-center">
                <label className="col-6 col-md-4 col-xl-2">Fecha</label>
                <label className="col-6 col-md-4 col-xl-2 textRigth">hoy</label>
            </div>
        </div>
    );
}

export default Ticket;