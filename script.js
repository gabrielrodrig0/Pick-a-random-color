//BOTAO DE MUDANÇA DE CORES

let alerta2 = alert('By: gabrielrodrig0, enjoy!');
let alerta1 = confirm("Clique no botão para gerar uma cor!");
const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn1 = document.querySelector('.btn');
const text = document.querySelector('.text');
const input =  document.getElementById('input');



btn1.addEventListener('click', clica)

function clica (){
    let name = '#';

    for (i=0;i<6;i++){
        name+=colors[random()];
    }

    document.body.style.backgroundColor = `${name}`;
    btn1.innerHTML = name;
    input.value = name;    
}

function random (){

    return Math.floor((colors.length)*Math.random());

}

//BOTAO RESET

let reset = document.getElementById('reset');

reset.addEventListener('click', reseta)

function reseta (){
    btn1.innerHTML = 'Clique Aqui';
    document.body.style.backgroundColor = "white";
    input.value = "";
}


//BOTAO COPIAR

let copyButton = document.getElementById('copy');

copyButton.addEventListener('click', ()=>{

    document.getElementById('input').select();
    document.execCommand('copy');
});

