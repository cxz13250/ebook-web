export const getCategories = (page, rows) =>{
    return fetch('/api/categories?page='+page+'&rows='+rows,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getCategory = (id) =>{
    return fetch('/api/category?categoryId='+id,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const createCategory = (category) =>{
    return fetch('/api/category',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(category)
    }).then(function(res) {
        return res.json();
    })
}

export const updateCategory = (category) =>{
    return fetch('/api/category',{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(category)
    }).then(function(res) {
        return res.json();
    })
}

export const deleteCategory = (id) =>{
    return fetch('/api/category?categoryId='+id,{
        method: 'DELETE',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}