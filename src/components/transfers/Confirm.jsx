import React from 'react';
import 'bootstrap-css-only';
import { useHistory } from 'react-router-dom';

const Confirm = ({close}) => {
    const history = useHistory();
    return(
        <div>
            <label>Cuenta Origen</label>
            <input disabled className="form-control" value='prueba' type="text"/>
            <br/>
            <label>Cuenta de destino</label>
            <input disabled className="form-control" value='prueba' type="text"/>
            <br/>
            <label>Importe</label>
            <input disabled className="form-control" value='prueba' type="text"/>
            <br/>
            <label>Referencia</label>
            <textarea disabled className="form-control" value='prueba'/>
            <br/>
            <button className='btn btn-primary' onClick={() => history.push('/ticket')}>Confirmar</button>
            <button className='btn btn-secondary' onClick={close} >Cancelar</button>
        </div>
    );
}

export default Confirm; 