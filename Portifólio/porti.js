const insta = document.getElementById("insta")
const tele = document.getElementById("tele")
const Email = document.getElementById("Email")

let troca = false


insta.addEventListener("click",() =>{
    if(!troca){
        insta.value = 'pedro_lins.h'
        troca = true
    }else{
        insta.value = 'Instagram'
        troca = false
    }
})


tele.addEventListener("click", () => {
    if(!troca){
        tele.value = '(45) 998348568'
        troca = true
    }else{
        tele.value = 'Telefone'
        troca = false
    }
})

Email.addEventListener('click', () => {
    if(!troca){
        Email.value ='lins90748@gmail.com'
        troca = true
    }else{
        Email.value = 'Email'
        troca = false
    }

})

//parte do projeto

const but = document.querySelectorAll('.projeto-btn')
const conteudo = document.querySelectorAll('.projetos-nãoativo')

but.forEach((valor, pos) => {
    valor.addEventListener('click', () => {
        conteudo.forEach((conteudo) => {
            conteudo.classList.remove('ativo')
            console.log(conteudo)
        })

        but.forEach((butt) =>{
            butt.classList.remove('ativo')
            console.log(butt)
        })

        // aqui e parte para mostra conteudo quando for selecionado

        conteudo[pos].classList.add('ativo')
        but[pos].classList.add('ativo')
    })
})