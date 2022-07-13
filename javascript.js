function insert(num){
    var valor = document.getElementById("visor").innerHTML;
    document.getElementById("visor").innerHTML = valor + num;
}

function clear(){
   
    document.getElementById('visor').innerText = "";

}

function del(){
    var resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length -1);
}


function calculate(){
    var resultado = document.getElementById('visor').innerHTML;
    if(resultado){

    }
}

function inicia () {
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('btn-clear')) clear();
    })
}

inicia();