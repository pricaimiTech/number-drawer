let quantitiy;
let startNumber;
let endNumber;
let listSortNumbers = []


function getStartGame() {
    changeStatusBotao()
    setQuantidade()
    setStartNumber()
    setEndNumber()
    checkNumbers(startNumber, endNumber)
}

/**
 * @description seta o valor do input na váriavel para saber a quantidade de numeros a serem sorteados
 */
function setQuantidade() {
    quantitiy = parseInt(getNumber("quantidade"))
}

/**
 * @description seta o valor startNumber, onde irá iniciar a busca pelos numeros aleatórios
 */
function setStartNumber() {
    startNumber = parseInt(getNumber("de"))
}

/**
 * @description seta o valor endNumber, onde irá finalizar a busca pelos numeros aleatórios
 */
function setEndNumber() {
    endNumber = parseInt(getNumber("ate"))
}

/**
 * 
 * @param {*} id id do elemento que será capturado o valor
 * @returns o valor inputado no campo
 */
function getNumber(id) {
    return document.getElementById(id).value
}

function sortNumber(quantitiy, startNumber, endNumber) {
    let drawnNumber = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber

    while (listSortNumbers.length < quantitiy) {
        if (listSortNumbers.includes(drawnNumber)) {
            sortNumber(quantitiy, startNumber, endNumber)
        } else {
            listSortNumbers.push(drawnNumber)
            console.log(listSortNumbers)
        }
    }

    changeText("sortNumbers", `Números sorteados:  ${listSortNumbers}`)
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
}

/**
 * @description função criada para adicionar texto ao elemento HTML através do JS
 * @param {@} tag elemento HTML
 * @param {*} text texto que será exibido na tela
 * @returns o texto adicionado ao elemento HTML a ser exibido na tela
 */
function changeText(tag, text) {
    // responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2})
    return document.getElementById(`${tag}`).innerHTML = text
}

/**
 * @description limpar todos os campos de input 
 */
function cleanInput() {
    const inputList = document.querySelectorAll("input")
    inputList.forEach((inputValue) => {
        inputValue.value = ''
    })
}

/**
 * @description reiniciar o jogo
 */
function restartGame() {
    cleanInput()
    changeStatusBotao()
}

/**
 * @description alterar o status do botão habilitando e desabilitando ele
 */
function changeStatusBotao() {
    let restartButton = document.getElementById('btn-reiniciar')

    if (restartButton.classList.contains('container__botao-desabilitado')) {
        restartButton.classList.remove('container__botao-desabilitado')
        restartButton.classList.add('container__botao')
    } else {
        restartButton.classList.remove('container__botao')
        restartButton.classList.add('container__botao-desabilitado')
    }
}

function checkNumbers(startNumber, endNumber) {

    if(startNumber>= endNumber) {
        alert("O numero inicial é maior ou igual ao número final. Confira os valores e Sorteia novamente")
    }else {
        sortNumber(quantitiy, startNumber, endNumber)
    }
    
}