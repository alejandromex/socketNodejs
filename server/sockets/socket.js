const { io } = require("../server");

io.on('connection',(client)=>{


    console.log("Usuario conectado");

    client.emit('enviarMensaje',{
        name: 'Admin-Alex',
        message: 'Welcome to my chat'
    });

    client.on('disconnect',()=>{
        console.log("Usuario desconectado");
    });

    //Escuchar al cliente
    client.on('enviarMensaje',(data, callback)=>{
        console.log(data);

        client.broadcast.emit("enviarMensaje",{
            data
        });

    });

    
});
