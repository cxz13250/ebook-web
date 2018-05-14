export const getBooks = (page, rows, keyword) =>{
    return fetch('/api/books?page='+page+'&rows='+rows+'&keyword='+keyword,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getBooksByCategory = (id) =>{
    return fetch('/api/books/'+id,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getBooksByMenu = (menu) =>{
    return fetch('/api/books/category?menu='+menu,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const getBook = (id) =>{
    return fetch('/api/book?bookId='+id,{
        method: 'GET',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}

export const createBook = (book) =>{
    return fetch('/api/book',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(book)
    }).then(function(res) {
        return res.json();
    })
}

export const updateBook = (book) =>{
    return fetch('/api/book',{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        credentials: 'same-origin',
        body: JSON.stringify(book)
    }).then(function(res) {
        return res.json();
    })
}

export const deleteBook = (id) =>{
    return fetch('/api/book?bookId='+id,{
        method: 'DELETE',
        credentials: 'same-origin'
    }).then(function(res) {
        return res.json();
    })
}