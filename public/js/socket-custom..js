
var socket = io();

//ON es para escuchar 
socket.on('connect',function(){
    console.log("Conectado al servidor");
});

socket.on('disconnect',function(){
    console.log("Perdimos conexion con el servidor");
});

socket.on('enviarMensaje',function(message){
    console.log(message);


})


//Emits son para enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Alex',
    message: "Hola mundo"
}, function(resp){
    console.log("Respuesta del servidor: ",resp);
});
