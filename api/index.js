const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
const PORT = 3002;
const TOKEN = 'simulaTokendi23jo238d23djj92ddl2n8dj';


 

const login = (userName, pass) => {
    if(userName === 'gaston24' && pass === 'gaston123')
        return {
            token: TOKEN,
            nombre: 'Gaston', 
            apellido: 'Mediña',
            cuentas: [
                {
                    cuenta: 124553,
                    saldo:25000,
                    moneda: 'UYU'
                },
                {
                    cuenta: 345345,
                    saldo:2500,
                    moneda: 'USD'
                },
                {
                    cuenta: 764345,
                    saldo:450,
                    moneda: 'EUR'
                }
            ]
        }
            if(userName === 'jenny' && pass === 'jenny123')
            return {
                token:TOKEN,
                nombre: 'Jennifer', 
                apellido: 'Duarte',
                cuentas: [
                    {
                        cuenta: 867345,
                        saldo:67000,
                        moneda: 'UYU'
                    },
                    {
                        cuenta: 678435,
                        saldo:4500,
                        moneda: 'USD'
                    },
                    {
                        cuenta: 793457,
                        saldo:6300,
                        moneda: 'EUR'
                    }
                ]
            }
    throw new Error(401);
} 

const getAccount = accountNumber => {
    if(isNaN(accountNumber))
        throw new Error(404);

    let accounts = [
        {
            nombre: 'Pedro', 
            apellido: 'Diaz',
            cuentas: [
                {
                    cuenta: 563445,
                    saldo:24235,
                    moneda: 'UYU'
                },
                {
                    cuenta: 934856,
                    saldo:454,
                    moneda: 'USD'
                },
                {
                    cuenta: 3467,
                    saldo:456,
                    moneda: 'EUR'
                }
            ]
        },
        {
            nombre: 'Marta', 
            apellido: 'Perez',
            cuentas: [
                {
                    cuenta: 867465,
                    saldo:678769,
                    moneda: 'UYU'
                },
                {
                    cuenta: 678534,
                    saldo:45633,
                    moneda: 'USD'
                },
                {
                    cuenta: 797324,
                    saldo:63534,
                    moneda: 'EUR'
                }
            ]
        }

    ]

    let user = accounts.find( user => {
        for (const c of user.cuentas) {
            if(c.cuenta === accountNumber)
                return true; 
        }
        return false;
    });
    
    let account = user && user.cuentas.find( cuenta => cuenta.cuenta === accountNumber);
    if(account) return {user, account};
    throw new Error(404);
}

const authenticate = incomingToken => {
    let splitedToken = incomingToken.split(' ');
    console.log(splitedToken)
    if(splitedToken[1] !== TOKEN)
        throw new Error(401);
}

const geteEchangeRate = () => {
    return {
        UYU: {
            USD: 45.05,
            EUR: 55.04
        },
        USD: {
            EUR: 0.84,
            UYU: 44.03
        },
        EUR: {
            USD: 1.19,
            UYU: 52.22
        }
    }
}

app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));

app.post('/login', function(req,res){ 
      try {
        let response = login(req.body.userName, req.body.pass);
        res.status(200).send(response);
      } catch (error) {
        res.status(error.message).send();
      }
});

app.get('/account', async function(req,res){ 
    try {
        authenticate(req.headers.authorization);
        let response = getAccount(+req.query.number);
        res.status(200).send(response);
    } catch (error) {
        res.status(error.message).send(error.message);
    }
});

app.post('/transfer', async function(req,res){ 
    try {
        authenticate(req.headers.authorization);
        res.status(200).send();
    } catch (error) {
        res.status(error.message).send(error.message);
    }
});

app.get('/exchangeRate', async function(req,res){ 
    try {
        authenticate(req.headers.authorization);
        let response = geteEchangeRate();
        res.status(200).send(response);
    } catch (error) {
        res.status(error.message).send(error.message);
    }
});

app.listen(PORT, () => console.info("MockApi port: " + PORT));