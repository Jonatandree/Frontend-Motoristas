const option_menus =0;
const option_menu = 1;
const option_entrar = 2;
const option_registrar = 3;
const option_ingreso = 4;
const option_registro = 5;
const option_ordenes = 6;
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
        break;
        default:
        break;
    }
}