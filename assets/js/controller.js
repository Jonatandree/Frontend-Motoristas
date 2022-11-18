const option_menus =0;
const option_menu = 1;
const option_entrar =2;
const option_registrar = 3;
const option_ingreso = 4;
const option_registro = 5;
const option_ordenes = 6;
const option_ordene = 7;
const option_factura = 8;


const body = document.body;
const color1 = ["#E5E5E5"];
const color2 = ["#E5E5E5"];
const color3 = ["#E5E5E5"];

const selectOption = (option) =>{

    switch (option){
        case option_menus:
            document.getElementById('section0').style.display="block";
            
        break;
        case option_menu:
            console.log('Visualizar Menu');
            body.style.backgroundColor = color1;
            document.getElementById('section1').style.display="block";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="none";
          
            
        break;
        case option_entrar:
            console.log('Visualizar Entrada');
            
            body.style.backgroundColor = color2;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="block";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="none";
        break;
        case option_registrar:
            console.log('Visualizar Registro');
            body.style.backgroundColor = color2;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="block";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="none";
        break;
            
        case option_ingreso:
            console.log('Ingreso');
            body.style.backgroundColor = color3;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="block";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="none";
           
        break;
        case option_registro:
            console.log('Registro Enviado');
            body.style.backgroundColor = color3;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="block";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="none";
          
        break;
        case option_ordenes:
            console.log('Confirmar Orden');
            body.style.backgroundColor = color3;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="block";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="none";
            
        break;
        case option_ordene:
            console.log('Estados de orden');
            body.style.backgroundColor = color3;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="block";
            document.getElementById('section8').style.display="none";
            
            
        break;
        case option_factura:
            console.log('vemos la factura');
            body.style.backgroundColor = color3;
            document.getElementById('section1').style.display="none";
            document.getElementById('section2').style.display="none";
            document.getElementById('section3').style.display="none";
            document.getElementById('section4').style.display="none";
            document.getElementById('section5').style.display="none";
            document.getElementById('section6').style.display="none";
            document.getElementById('section7').style.display="none";
            document.getElementById('section8').style.display="block";
            
            
        break;
        
        default:
        break;
    }
}




var estados = [
    { 
        estado: "Tomada",
        signo:"bx bxs-check-circle",
    },
    { 
        estado: "En Origen",
        signo:"bx bx-target-lock",
    },
    { 
        estado: "En Camino",
        signo:"bx bx-cycling",
    },
    { 
        estado: "Entregado",
        signo:"bx bxs-home",
    },


];


function GenerarEstados(){
    estados.forEach(function(estado,i){
        document.getElementById('estados').innerHTML +=
        `<div onclick="CambioEstilo(${i})"  style="margin-bottom: 10px;"  class="col-9"  id="fondo-estados-orden"> 
        <i id="logo${i}"; style="font-size: 100px; display: flex; justify-content: center; color: #fff; padding-top:20px;" class='${estado.signo}'></i>
        <h1 style=" display: flex;justify-content:center ;color:#fff;; ">${estado.estado}</h1>
    </div>`


    });

}

GenerarEstados();

function CambioEstilo(i){
    console.log('Confirmar Orden');
    document.getElementById(`logo${i}`).style.color = 'rgb(8, 187, 47)';

}
function RemoverEstilo(){
    console.log('regresar el estado');
    document.getElementById(`logo0`).style.color = 'rgb(255, 255, 255)';
    document.getElementById(`logo1`).style.color = 'rgb(255, 255, 255)';
    document.getElementById(`logo2`).style.color = 'rgb(255, 255, 255)';
    document.getElementById(`logo3`).style.color = 'rgb(255, 255, 255)';

}



var EstadoDeRegistro = [

    { 
        estado: "Estado: Pendiente",
        signo:"bx bxs-info-circle",
    },
    { 
        estado: "Estado: Aprobado",
        signo:"bx bxs-check-circle",
    },
    { 
        estado: "Estado: Denegado",
        signo:"bx bxs-x-circle",
    },
];



function GenerarEstadosDeRegistro(){
    EstadoDeRegistro.forEach(function(estado){
        document.getElementById('EstadosDeRegistro').innerHTML +=
        `<div style="margin-bottom: 10px;"  class="col-12"  id="fondo-registro"> 
        <div style=" margin-top:20px">
        <h1 style=" display: flex;justify-content:center ;color:#fff;; ">¡El registro se ha</h1>
        <h1 style=" display: flex;justify-content:center ;color:#fff;; ">realizado exitosamente!</h1>
        </div>

        <i style="font-size: 200px; display: flex; justify-content: center; color: #fff; padding-top:20px;" class='${estado.signo}'></i>
        <h1 style=" font-size:35px;margin-top:20px; display: flex;justify-content:center ;color:#fff; ">${estado.estado}</h1>
    </div>`


    });

}

GenerarEstadosDeRegistro();