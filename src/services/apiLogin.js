const login = user => {

    const { userName, pass } = user;
    if(userName === 'Tonga' && pass === 'tonga')
        return {
            statusCode:200,
            body:{
                token:'kdfaslufh4897h3f872f0733fhj',
                nombre: 'Gaston', 
                apellido: 'Mediña',
                cuentas: [
                    {
                        cuenta: 1245,
                        saldo:24235,
                        moneda: 'UYU'
                    },
                    {
                        cuenta: 3453,
                        saldo:454,
                        moneda: 'USD'
                    },
                    {
                        cuenta: 764,
                        saldo:456,
                        moneda: 'EUR'
                    }
                ]
            }}
            if(userName === 'Jenny' && pass === 'jenny')
            return {
                statusCode:200,
                body:{
                    token:'jenytoken',
                    nombre: 'Jennifer', 
                    apellido: 'Duarte',
                    cuentas: [
                        {
                            cuenta: 867,
                            saldo:678769,
                            moneda: 'UYU'
                        },
                        {
                            cuenta: 678,
                            saldo:45633,
                            moneda: 'USD'
                        },
                        {
                            cuenta: 797,
                            saldo:63534,
                            moneda: 'EUR'
                        }
                    ]
                }}
    return {statusCode:401, message:'usuario o contraseña incorrecta'}
}

export {login};