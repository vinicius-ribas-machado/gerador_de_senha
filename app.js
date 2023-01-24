let sliderelemente = document.querySelector('#slider')
let buttonelemente = document.querySelector('#button')

let sizepassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerpassword = document.querySelector('#container-password')


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'
let novasenha = ''

sizepassword.innerHTML = sliderelemente.value

slider.oninput = function(){
    sizepassword.innerHTML = this.value
}

function gerarsenha(){
    
    let pass = ''

    for(let i = 0, n = charset.length; i < sliderelemente.value; i++){
        pass += charset.charAt(Math.floor(Math.random()* n ))
    }
    
    containerpassword.classList.remove('hide')
    password.innerHTML = pass
    novasenha = pass
}


function copypasswors(){
    navigator.clipboard.writeText(novasenha)
    alert('Senha copiada com sucesso!')

}