const boton1 = document.getElementById("btnsumar");
boton1.addEventListener("click", sumar)
function sumar() {
    const varnumero1 = Number (document.getElementById("num1").value);
    const varnumero2 = Number (document.getElementById("num2").value);

    const varresultado = varnumero1 + varnumero2;
    const imprimirdivresultado = document.getElementById("divresultado");
    imprimirdivresultado.innerText = varresultado;
}

const boton2 = document.getElementById("btnrestar");
boton2.addEventListener("click", restar)
function restar() {
    const varnumero3 = Number (document.getElementById("num3").value);
    const varnumero4 = Number (document.getElementById("num4").value);


    const varresultado = varnumero3 - varnumero4;
    const imprimirdivresultado = document.getElementById("divresultado2");
    imprimirdivresultado.innerText = varresultado;
}

const boton3 = document.getElementById("btnmulti");
boton3.addEventListener("click", multi)
function multi() {
    const varnumero5 = Number (document.getElementById("num5").value);
    const varnumero6 = Number (document.getElementById("num6").value);


    const varresultado = varnumero5 * varnumero6;
    const imprimirdivresultado = document.getElementById("divresultado3");
    imprimirdivresultado.innerText = varresultado;
}

const boton4 = document.getElementById("btndivi");
boton4.addEventListener("click", divi)
function divi() {
    const varnumero7 = Number (document.getElementById("num7").value);
    const varnumero8 = Number (document.getElementById("num8").value);


    const varresultado = varnumero7 / varnumero8;
    const imprimirdivresultado = document.getElementById("divresultado4");
    imprimirdivresultado.innerText = varresultado;
}

const boton5 = document.getElementById("numasen");
boton5.addEventListener("click", mostrar);
function mostrar() {
    const listas = document.getElementById("listado");
    listas.innerText = " ";
    for(let x=1;x<=100; x=x+1){
       // alert("Numero: " + x);
       const li = document.createElement("li");
       li.setAttribute("class", "list-group-item item mt-1");
       li.innerText = x;
       listas.appendChild(li);
    }   
}

const boton6 = document.getElementById("botonverificacion");
boton6.addEventListener("click", compararcalificaciones);
function compararcalificaciones() {
    const calificacion = Number(document.getElementById("numcalificacion").value);
    const resultado = document.getElementById("divimprimircal");
    if(calificacion >=8){
        resultado.innerText = "Aprobado";
    }
    else{
        resultado.innerText = "Reprobado";
        const audio = document.getElementById("audioreprobado");
        audio.play();
    }
}

const boton7 = document.getElementById("areacuadra");
boton7.addEventListener("click", areacuadrado);
function areacuadrado(){
    const varnumero9 = Number (document.getElementById("num9").value);

    const varresultado = varnumero9 * varnumero9;
    const imprimirdivresultado = document.getElementById("divresultado5");
    imprimirdivresultado.innerText = varresultado;
}

const boton8 = document.getElementById("arearecta");
boton8.addEventListener("click", arearectangulo);
function arearectangulo(){
    const varnumero10 = Number (document.getElementById("num10").value);
    const  varnumero11 = Number (document.getElementById("num11").value);

    const varresultado = varnumero10 * varnumero11;
    const imprimirdivresultado = document.getElementById("divresultado6");
    imprimirdivresultado.innerText = varresultado;
}

const boton9 = document.getElementById("botondescuento");
boton9.addEventListener("click", descuentototal);
function descuentototal() {
    const precio = Number(document.getElementById("numdescuento").value);
    const descuento = document.getElementById("divimprimirdescuento");
    if(precio >=1000){
        
        const vardescuento = precio * .30;
        const varresultado = precio - vardescuento;
        descuento.innerText = "Su total es de: " + varresultado;
    }
    else
        if(precio <=500){

        const vardescuento = precio * .10;
        const varresultado = precio - vardescuento
        descuento.innerText = "Su total: " + varresultado;
        }
}

const boton10 = document.getElementById("botonparimpar");
boton10.addEventListener("click", esparoimpar);
function esparoimpar(){
    const paroimpar = Number(document.getElementById("num12").value);
    const resultadoparimpar = document.getElementById("divimprimirparimpar");
    if(paroimpar % 2==0){
        
        resultadoparimpar.innerText = "El numero es par";
    }
    else{
        
        resultadoparimpar.innerText = "El numero es impar";
    }
}

const boton11 = document.getElementById("numdesen");
boton11.addEventListener("click", mostrarnumdesen);
function mostrarnumdesen() {
    const listas1 = document.getElementById("listado1");
    listas1.innerText = " ";
    for(let x=100;x>=0; x=x-1){
       // alert("Numero: " + x);
       const li = document.createElement("li");
       li.setAttribute("class", "list-group-item item mt-1");
       li.innerText = x;
       listas1.appendChild(li);
    }   
}