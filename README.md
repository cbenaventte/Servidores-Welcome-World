# Servidores-Welcome-World

Descripción
La compañía Welcome World Spa se dedica a ofrecer servidores y paneles de control con
herramientas de FTP. La compañía necesita agregar una funcionalidad que le permita a sus
usuarios crear dentro de la plataforma los archivos con las extensiones y el contenido que
deseen, el mismo debe ser almacenado en el servidor.
Necesitarás crear un servidor en Node que permita crear, leer, renombrar y eliminar archivos
alojados en el servidor por medio de las rutas correspondientes.
Deberás enviar los datos como parámetros en una consulta GET por medio de formularios
HTML

Requerimientos
1. Crear un servidor en Node con el módulo http.
2. Disponibilizar una ruta para crear un archivo a partir de los parámetros de la consulta
recibida.
3. Disponibilizar una ruta para devolver el contenido de un archivo cuyo nombre es
declarado en los parámetros de la consulta recibida.
4. Disponibilizar una ruta para renombrar un archivo, cuyo nombre y nuevo nombre es
declarado en los parámetros de la consulta recibida.
5. Disponibilizar una ruta para eliminar un archivo, cuyo nombre es declarado en los
parámetros de la consulta recibida.
6. Devolver un mensaje declarando el éxito o fracaso de lo solicitado en cada consulta
recibida.
7. Agrega la fecha actual al comienzo del contenido de cada archivo creado en formato
“dd/mm/yyyy”. Considera que si el día o el mes es menor a 10 concatenar un “0” a la
izquierda.
8. En la ruta para renombrar, devuelve un mensaje de éxito incluyendo el nombre
anterior del archivo y su nuevo nombre de forma dinámica .
9. En el mensaje de respuesta de la ruta para eliminar un archivo, devuelve el siguiente
mensaje: “Tu solicitud para eliminar el archivo <nombre_archivo> se está
procesando”, y luego de 3 segundos envía el mensaje de éxito mencionando el
nombre del archivo eliminado.
