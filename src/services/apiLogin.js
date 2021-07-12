const URI = 'http://localhost:3002';

const login = async user => {
    try {
        let response = await fetch(`${URI}/login`,{
        method: "POST",
            headers:{
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(user)
        });
        response = await response.json();
        return response;
    } catch (error) {
       return null; 
    }
}

const getAccount = async accountNumber => {
    try {
        let token = localStorage.getItem('usrToken');
        let response = await fetch(`${URI}/account?number=${accountNumber}`,{
        method: "GET",
            headers:{
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Authorization": `bearer ${token}`
            },
        });
        response = await response.json();
        return response;
    } catch (error) {
       return error; 
    }
}

const transfer = async dataTransfer => {
    try {
        let token = localStorage.getItem('usrToken');
        let response = await fetch(`${URI}/transfer`,{
        method: "Post",
            headers:{
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify(dataTransfer)
        });
        response = await response.json();
        return response;
    } catch (error) {
       return error; 
    }
}

const exchangeRate = async () => {
    try {
        let token = localStorage.getItem('usrToken');
        let response = await fetch(`${URI}/exchangeRate`,{
        method: "Post",
            headers:{
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Authorization": `bearer ${token}`
            },
        });
        response = await response.json();
        return response;
    } catch (error) {
       return error; 
    }
}

export {login, getAccount, transfer, exchangeRate};