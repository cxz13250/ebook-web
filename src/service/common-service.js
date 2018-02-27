export const uploadFile = (file,path) =>{
    let formData = new FormData();
    formData.append('file',file,file.name);
    return fetch('/api/upload?path='+path,{
        method: 'POST',
        credentials: 'same-origin',
        body: formData
    }).then(function(res) {
        return res.json();
    })
}