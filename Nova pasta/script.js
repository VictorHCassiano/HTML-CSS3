let btnAdd = document.querySelector('button')
let table = document.querySelector('table')

let inputnome = document.querySelector('#nome')
let inputidade = document.querySelector('#idade')
let inputprofissao = document.querySelector('#profissao')

btnAdd.addEventListener('click',() => {
    let nome = inputnome.value;
    let idade = inputidade.value;
    let profissao = inputprofissao.value;

    let template = 
                 `<tr>
                    <td>${nome}</td>
                    <td>${idade}</td>
                    <td>${profissao}</td>
                 </tr>`;
 table.innerHTML += template;                
})