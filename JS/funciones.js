/**
 * Apenas cargamos el script ajustamos la barra lateral segun el ancho de pantalla
 */
var widthNew = document.documentElement.clientWidth;
redimensionar(widthNew);
console.log(widthNew)

/** Descripcion: Capturamos el evento: El mouse está sobre el boton enviar del formulario */
document.getElementById("btnEnviar").addEventListener('mouseover',function(){
    this.style.backgroundColor='green';
});
/** Descripcion: Capturamos el evento: El mouse salio del boton enviar del formulario */
document.getElementById("btnEnviar").addEventListener('mouseout',function(){
   this.style.backgroundColor='buttonface';
});

/** Descripcion: Capturamos el evento: Se redimensionó la pantalla */
window.addEventListener('resize',function(){
    var widthNew = document.documentElement.clientWidth;
    redimensionar(widthNew);
    
});
/**Descripcion: Redimensiona la barra lateral 50px  menos que el ancho de la pantalla */
function redimensionar(anchoPantalla){
    var nuevoLargo = anchoPantalla-50;
    var StrnuevoLargo = nuevoLargo+"px";
   
    document.getElementById("curriculum").style.width=StrnuevoLargo;
}