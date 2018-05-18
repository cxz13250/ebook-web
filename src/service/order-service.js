export const getOrders = (page, rows, userId) =>{
    var url='/api/orders?page='+page+'&rows='+rows;
    if(userId){
        url = url + '&userId='+userId;
    }
    return fetch(url,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getOrder = (id) =>{
    return fetch('/api/order?orderId='+id,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const createOrder = (order) =>{
    return fetch('/api/order',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(order)
    }).then(function(res) {
        return res.json();
    })
}

export const updateOrder = (order) =>{
    return fetch('/api/order',{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(order)
    }).then(function(res) {
        return res.json();
    })
}

export const deleteOrder = (id) =>{
    return fetch('/api/order?orderId='+id,{
        method: 'DELETE',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const checkOrder = (id) =>{
    return fetch('/api/order/'+id,{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
    }).then(function(res) {
        return res.json();
    })
}