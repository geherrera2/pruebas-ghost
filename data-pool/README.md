Este módulo crea datos de tipo título, tags y contenido para posts o pages para ser utilizado en los
escenarios de prueba de la aplicación Ghost.

Para usarlo, realice los siguientes pasos:

1. Usando la línea de comandos ubíquese en la carpeta **data-pool**
2. Ejecute la instrucción **npm install** para instalar las dependencias necesarias
3. Diríjase a la carpeta **proyecto-cypress** y ejecute el comando node **../data-pool/start.js**
Esto creará una nueva carpeta llamada "data" donde se alojarán, en archivos separados,
datos para título, tags y contenido. Al final, aparecerá un título, párrafo y tag en la consola.

getTitle(): retorna un título
getParagraph(): retorna un párrafo
getTag(): retorna un tag

Para usar estos datos, debe usar la función cy.task('nombre_funcion'). Guíese de la función **fillPostTitle** que se encuentra en **posts-page.js**

