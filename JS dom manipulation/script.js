const container = document.querySelector('#container')


const paragrafo = document.createElement('p')
        paragrafo.classList.add('paragrafo')
        paragrafo.textContent = 'Hey Im Red'
        container.appendChild(paragrafo)
        paragrafo.style.color = 'Red'


const h3Azul = document.createElement('h3')
        h3Azul.classList.add('h3Azul')
        h3Azul.textContent = "Im a blue h3!"
        container.appendChild(h3Azul)
        h3Azul.style.color = 'Blue'

const divPreta = document.createElement('div')
        divPreta.classList.add('divPreta')
        container.appendChild(divPreta);
        divPreta.style.borderStyle = 'Solid'
        divPreta.style.backgroundColor = 'Pink'
        

const h1nDiv = document.createElement('h1')
        h1nDiv.textContent= "Im in a div"
        divPreta.appendChild(h1nDiv)

const pnDiv = document.createElement('p')
        pnDiv.textContent= "ME TOO"
        divPreta.appendChild(pnDiv)