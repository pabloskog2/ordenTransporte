// SELECT DE COMUNAS

let url = './json/comunas.json'

fetchData();

function fetchData (e){
    fetch (url)
    .then (res => res.json())
    .then (data => loadData(data))
    .catch (err => console.log(err))
    e.preventDefault();
}

function loadData(data){
    for (row of data)
    {
        opt = document.createElement('option')
        opt.text = row.text
        opt.value = row.text
        listadoComunas.options.add(opt)
    }
}