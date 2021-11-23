

//Agregando módulos
const http = require('http')
const url = require('url')
const fs = require('fs')

//Creando la función del servidor
http.createServer(function(req, res){

    //Capturando los parámetros
    const parametros = url.parse(req.url, true).query

    const contenido = parametros.contenido
    const nombre = parametros.nombre
    const nuevoNombre = parametros.nuevoNombre

    let f = new Date();

    //Definiendo operaciones de creación y lectura de ficheros
    if(req.url.includes('/crear')){
        fs.writeFile(nombre, `${f.getDate() + "/"+ f.getMonth()+ "/" +f.getFullYear()}\n ${contenido}`, ()=> {
            res.write('El archivo ha sido creado con exito')
            res.end()
        })
    }
    // Definiendo la lectura del fichero indicado
    if(req.url.includes('/leer')){
        fs.readFile(nombre, (err, data)=>{
            res.write(data)
            res.end()
        })
    }
    // Renombrar un fichero, formulario 3
    if(req.url.includes('/renombrar')){
        fs.rename(nombre,nuevoNombre,(err,data) => {
            res.write(`El archivo ${nombre} fue renombrado con Exito como ${nuevoNombre}`)
            res.end()
        })
    }

    
    // Eliminando un fichero, formulario 4
    if(req.url.includes('/eliminar')){
             fs.unlink(nuevoNombre,(err,data) => { 
                
                    res.write(`Tu solicitud para eleiminar el archivo ${nuevoNombre} se esta procesando!`)
                    
                    setTimeout(() =>{
                        res.write(`El archivo ${nuevoNombre} fue eliminado!`)
                              return res.end()
                     },3000 )
                       
                    
                   
               
         
        })
    }
})
.listen(8080, ()=> console.log('Escuchando en el puerto 8080'))


