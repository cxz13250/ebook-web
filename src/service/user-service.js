export const login = (user) =>{
    return fetch('/api/user/login',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(user)
    }).then(function(res) {
        return res.json();
    })
}

export const loginout = () =>{
    return fetch('/api/user/logout',{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const register = (user) =>{
    return fetch('/api/user/register',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(user)
    }).then(function(res) {
        return res.json();
    })
}

export const getOperations = (page, rows) =>{
    return fetch('/api/operations?page='+page+'&rows='+rows,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getUsers = (page, rows, keyword) =>{
    var url='/api/users?page='+page+'&rows='+rows;
    if(keyword&&keyword.trim()!=""){
        url=url+'&keyword='+keyword;
    }
    return fetch(url,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getUserInfo = (id) =>{
    return fetch('/api/user?userId='+id,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const updateUser=(user) => {
    return fetch('/api/user',{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(user)
    }).then(function(res) {
        return res.json();
    })
}

export const getUser = () => {
    return JSON.parse(window.localStorage.getItem('user'));
}

export const setUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
}

