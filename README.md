# Entrega Semana 7 

## Estategia pool de datos a-priori 

## Estategia pool de datos aleatorio - dinámico 

## Estategia escenario aleagorio 

## Paso para la ejecución de los escenarios de prueba utilizando estrategias de pool de datos 

### Paso 1 - Generar archivos pool de datos a-priori

Este módulo crea datos de tipo título, tags y contenido para posts o pages para ser utilizado en los
escenarios de prueba de la aplicación Ghost.

Para usarlo, realice los siguientes pasos:

1. Usando la línea de comandos ubíquese en la carpeta **data-pool**
2. Ejecute la instrucción **npm install** para instalar las dependencias necesarias
3. Diríjase a la carpeta **proyecto-cypress** y ejecute el comando node **node ../data-pool/start.js**
Esto creará una nueva carpeta llamada "data" donde se alojarán, en archivos separados,
datos para título, tags y contenido. Al final, aparecerá un título, párrafo y tag en la consola.

- getTitle(): retorna un título
- getParagraph(): retorna un párrafo
- getTag(): retorna un tag
- getUrl(): retorna una url
- getDateFuture(): retorna una fecha futura
- getDatePass(): retorna una fecha pasada


### Paso 2  correr las pruebas con la versión 3.42.5 de Ghost con la herramienta Cypress
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Ingresar a la carpeta proyecto-cypress-datos |
|2| Configuarar los archivos env :|
|| Ingresar a la carpeta cypress y editar el archivo env.js   |
|| Colocar el valor la url del servidor en la variable "baseURL" |
|| Ingresar a la carpeta cypress y crear el archivo env_local.js con la estructura de el archivo  env_local_example.js |
|| Colocar el valor de usuario y contraseña en las variables "username" y "password"|
|3| Recuerde previamente tener corriendo la versión 3.42.5 de Ghost sobre la cual va ejecutar los escenarios | 
|4| Ejecutar el comando cypress run  |

## Tabla escenarios Page
| #  | Funcionalidad                                   | Detalles del flujo                                          | Estrategia                       |
| -- | ----------------------------------------------- | ----------------------------------------------------------- | -------------------------------- |
| 1  | Create page draft                               | \- Hacer sign in<br>\- Page<br>\- Crear page                | Pool de datos a-priori           |
| 2  | Create page draft                               | \- Hacer sign in<br>\- Page<br>\- Crear page                | Pool de datos aleatorio dinámico |
| 3  | Create page draft                               | \- Hacer sign in<br>\- Page<br>\- Crear page                | Escenario aleatorio              |
| 4  | Create page title (size 1998)                   | \- Hacer sign in<br>\- Page<br>\- Crear page                | Pool de datos a-priori           |
| 5  | Create page title (size 1998)                   | \- Hacer sign in<br>\- Page<br>\- Crear page                | Pool de datos aleatorio dinámico |
| 6  | Create page title (size 1998)                   | \- Hacer sign in<br>\- Page<br>\- Crear page                | Escenario aleatorio              |
| 7  | Update content page draft                       | \- Hacer sign in<br>\- Page<br>\- Update page               | Pool de datos a-priori           |
| 8  | Update content page draft                       | \- Hacer sign in<br>\- Page<br>\- Update page               | Pool de datos aleatorio dinámico |
| 9  | Update content page draft                       | \- Hacer sign in<br>\- Page<br>\- Update page               | Escenario aleatorio              |
| 10 | Create page and publish                         | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Pool de datos a-priori           |
| 11 | Create page and publish                         | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Pool de datos aleatorio dinámico |
| 12 | Create page and publish                         | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Escenario aleatorio              |
| 13 | Update content page and publish                 | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos a-priori           |
| 14 | Update content page and publish                 | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos aleatorio dinámico |
| 15 | Update content page and publish                 | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Escenario aleatorio              |
| 16 | Update content page one character and publish   | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos a-priori           |
| 17 | Update content page one character and publish   | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos aleatorio dinámico |
| 18 | Update content page one character and publish   | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Escenario aleatorio              |
| 19 | Create page and Scheduled                       | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Pool de datos a-priori           |
| 20 | Create page and Scheduled                       | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Pool de datos aleatorio dinámico |
| 21 | Create page and Scheduled                       | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Escenario aleatorio              |
| 22 | Create page and Scheduled -negative             | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Pool de datos a-priori           |
| 23 | Create page and Scheduled -negative             | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Pool de datos aleatorio dinámico |
| 24 | Create page and Scheduled -negative             | \- Hacer sign in<br>\- Page<br>\- Crear page<br>\- Publish  | Escenario aleatorio              |
| 25 | Update content page and change status Scheduled | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos a-priori           |
| 26 | Update content page and change status Scheduled | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos aleatorio dinámico |
| 27 | Update content page and change status Scheduled | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Escenario aleatorio              |
| 28 | Update settings excerpt page and publish        | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos a-priori           |
| 29 | Update settings excerpt page and publish        | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Pool de datos aleatorio dinámico |
| 30 | Update settings excerpt page and publish        | \- Hacer sign in<br>\- Page<br>\- Update page<br>\- Publish | Escenario aleatorio              |

## Tabla escenarios General Settings
| # | Escenario | Detalles del flujo | Estrategia |
| -------------- | :--------- | :---------- | :--------- |
|  1 | Edit The name of your site | - Hacer sign in, - Clic en General Settings, - Expander Title & description, - Ingresar información en The name of your site, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  2 | Edit The name of your site | - Hacer sign in, - Clic en General Settings, - Expander Title & description, - Ingresar información en The name of your site, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  3 | Edit The name of your site | - Hacer sign in, - Clic en General Settings, - Expander Title & description, - Ingresar información en The name of your site, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  4 | Edit Used in your theme, meta data and search results | - Hacer sign in, - Clic en General Settings, - Expander Title & description, - Ingresar información en Used in your theme, meta data and search results, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  5 | Edit Used in your theme, meta data and search results | - Hacer sign in, - Clic en General Settings, - Expander Title & description, - Ingresar información en Used in your theme, meta data and search results, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  6 | Edit Used in your theme, meta data and search results | - Hacer sign in, - Clic en General Settings, - Expander Title & description, - Ingresar información en Used in your theme, meta data and search results, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  7 | Edit Meta title | - Hacer sign in, - Clic en General Settings, - Expander Meta data, - Ingresar información en Meta title, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  8 | Edit Meta title | - Hacer sign in, - Clic en General Settings, - Expander Meta data, - Ingresar información en Meta title, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  9 | Edit Meta title | - Hacer sign in, - Clic en General Settings, - Expander Meta data, - Ingresar información en Meta title, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  10 | Edit Meta description | - Hacer sign in, - Clic en General Settings, - Expander Meta data, - Ingresar información en Meta description, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  11 | Edit Meta description | - Hacer sign in, - Clic en General Settings, - Expander Meta data, - Ingresar información en Meta description, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  12 | Edit Meta description | - Hacer sign in, - Clic en General Settings, - Expander Meta data, - Ingresar información en Meta description, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  13 | Edit Twitter title | - Hacer sign in, - Clic en General Settings, - Expander Twitter card, - Ingresar información en Twitter title, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  14 | Edit Twitter title | - Hacer sign in, - Clic en General Settings, - Expander Twitter card, - Ingresar información en Twitter title, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  15 | Edit Twitter title | - Hacer sign in, - Clic en General Settings, - Expander Twitter card, - Ingresar información en Twitter title, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  16 | Edit Twitter description | - Hacer sign in, - Clic en General Settings, - Expander Twitter card, - Ingresar información en Twitter description, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  17 | Edit Twitter description | - Hacer sign in, - Clic en General Settings, - Expander Twitter card, - Ingresar información en Twitter description, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  18 | Edit Twitter description | - Hacer sign in, - Clic en General Settings, - Expander Twitter card, - Ingresar información en Twitter description, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  19 | Edit Facebook title | - Hacer sign in, - Clic en General Settings, - Expander Facebook card, - Ingresar información en Facebook title, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  20 | Edit Facebook title | - Hacer sign in, - Clic en General Settings, - Expander Facebook card, - Ingresar información en Facebook title, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  21 | Edit Facebook title | - Hacer sign in, - Clic en General Settings, - Expander Facebook card, - Ingresar información en Facebook title, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  22 | Edit Facebook description | - Hacer sign in, - Clic en General Settings, - Expander Facebook card, - Ingresar información en Facebook description, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  23 | Edit Facebook description | - Hacer sign in, - Clic en General Settings, - Expander Facebook card, - Ingresar información en Facebook description, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  24 | Edit Facebook description | - Hacer sign in, - Clic en General Settings, - Expander Facebook card, - Ingresar información en Facebook description, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  25 | Edit URL of your publication's Facebook page | - Hacer sign in, - Clic en General Settings, - Expander Social accounts, - Ingresar información en URL of your publication's Facebook page, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  26 | Edit URL of your publication's Facebook page | - Hacer sign in, - Clic en General Settings, - Expander Social accounts, - Ingresar información en URL of your publication's Facebook page, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  27 | Edit URL of your publication's Facebook page | - Hacer sign in, - Clic en General Settings, - Expander Social accounts, - Ingresar información en URL of your publication's Facebook page, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |
|  28 | Edit URL of your publication's Twitter profile | - Hacer sign in, - Clic en General Settings, - Expander Social accounts, - Ingresar información en URL of your publication's Twitter profile, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos a-priori |
|  29 | Edit URL of your publication's Twitter profile | - Hacer sign in, - Clic en General Settings, - Expander Social accounts, - Ingresar información en URL of your publication's Twitter profile, - Clic en Save settings, - Verificar que Saved es mostrado | Pool de datos aleatorio dinámico |
|  30 | Edit URL of your publication's Twitter profile | - Hacer sign in, - Clic en General Settings, - Expander Social accounts, - Ingresar información en URL of your publication's Twitter profile, - Clic en Save settings, - Verificar que Saved es mostrado | Escenario aleatorio |

## Tabla escenarios Tags
| # | Escenario | Detalles del flujo | Estrategia |
| -------------- | :--------- | :---------- | :--------- |
|  1 |  Crear Tag solo name |  Hacer sign in, - Tags, - Crear tag, - Regresarse out   | Pool de datos a-priori |
|  2 |  Crear Tag con toda la informacion   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out | Escenario aleatorio |
|  3 |  Crear Tag Interno   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out | Escenario aleatorio |
|  4 |  Crear Tag con 100 caracteres   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out |  Pool de datos a-priori |
|  5 |  Editar Tag   |   Hacer sign in, - Tags, - Crear tag, -buscar Tag, -modificar tag - Regresarse out |  Pool de datos a-priori |
|  6 |  Editar Tag publico a internal   |   Hacer sign in, - Tags, - Crear tag, -buscar Tag, -modificar tag - Regresarse out |  Escenario aleatorio |
|  7 |  Editar Tag descripcion con mas de 500 caracteres   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out |  Escenario aleatorio |
|  8 |  Eliminar Tag   |   Hacer sign in, - Tags, - Crear tag, - Buscar Tag, -Eliminar Tag,  - Regresarse out |  Escenario aleatorio |
|  9 |  Crear Tag vacio   |   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Escenario aleatorio |
|  10 |  Crear Tag con valor de color no hexadeximal   |   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Escenario aleatorio |
|  11 |  Abandonar la creacion de un tag |   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Escenario aleatorio |
|  12 |  Crear tag con la opcion "Stay"|   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Escenario aleatorio |
|  13 |  Cancelar la eliminacion de un tag |   Hacer sign in, - Tags, - Crear tag, - Buscar Tag, -Eliminar Tag,  - Regresarse out |  Escenario aleatorio |
|  14 |  Crear Tag solo name |  Hacer sign in, - Tags, - Crear tag, - Regresarse out   | Escenario aleatorio |
|  15 |  Crear Tag solo name |  Hacer sign in, - Tags, - Crear tag, - Regresarse out   | Pool de datos aleatorio dinámico |
|  16 |  Crear Tag Interno   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out |  Pool de datos a-priori |
|  17 |  Crear Tag Interno   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out |  Pool de datos aleatorio dinámico |
|  18 |  Crear Tag con 100 caracteres   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out |  Escenario aleatorio |
|  19 |  Crear Tag con 100 caracteres   |   Hacer sign in, - Tags, - Crear tag, - Regresarse out |  Pool de datos aleatorio dinámico |
|  20 |  Editar Tag   |   Hacer sign in, - Tags, - Crear tag, -buscar Tag, -modificar tag - Regresarse out |  Escenario aleatorio |
|  21 |  Editar Tag   |   Hacer sign in, - Tags, - Crear tag, -buscar Tag, -modificar tag - Regresarse out |  Pool de datos aleatorio dinámico |
|  22 |  Editar Tag publico a internal   |   Hacer sign in, - Tags, - Crear tag, -buscar Tag, -modificar tag - Regresarse out |  Pool de datos a-priori  |
|  23 |  Editar Tag publico a internal   |   Hacer sign in, - Tags, - Crear tag, -buscar Tag, -modificar tag - Regresarse out |  Pool de datos aleatorio dinámico  |
|  24 |  Eliminar Tag   |   Hacer sign in, - Tags, - Crear tag, - Buscar Tag, -Eliminar Tag,  - Regresarse out |  Pool de datos a-priori |
|  25 |  Eliminar Tag   |   Hacer sign in, - Tags, - Crear tag, - Buscar Tag, -Eliminar Tag,  - Regresarse out |  Pool de datos aleatorio dinámico |
|  26 |  Abandonar la creacion de un tag |   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Pool de datos a-priori  |
|  27 |  Abandonar la creacion de un tag |   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Pool de datos aleatorio dinámico  |
|  28 |  Crear tag con la opcion "Stay"|   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Pool de datos a-priori |
|  29 |  Crear tag con la opcion "Stay"|   Hacer sign in, - Tags, - Crear tag,  - Regresarse out |  Pool de datos aleatorio dinámico |
|  30 |  Cancelar la eliminacion de un tag |   Hacer sign in, - Tags, - Crear tag, - Buscar Tag, -Eliminar Tag,  - Regresarse out |  Pool de datos a-priori |

# Entrega Semana 5-6
# Implementación de pruebas automatizadas con Kraken y Cypress
## Tabla funcionalidades
| Funcionalidad | Descripción | Automatizada  |
| -------------- |-------------- | :---------: |
| Sign in | funcionalidad que permite ingresar a la consola de administración del sitio  | No |
| Profile | permite administrar la información y las credenciales del usuario | No |
| Posts | permite crear una página tipo post |Si |
| Tags | permite rotular bajo una etiqueta los posts creados | Si |
| Staff | permite invitar a nuevos usuarios para que accedan al ABP | Si|
| General Settings | permite actualizar la información de la publicación, la meta-data y las redes sociales del sitio  | Si|
| Design Settings | permite adicionar y gestionar los tabs existentes de navegación y cambiar el tema del sitio| Si|
| Code Injection Settings | inyectar código en los archivos del tema del sitio para agregar “tracking codes” y “meta-tags”| No |
| Integration Settings | adicionar y gestionar las integraciones existentes con otras apps, como por ejemplo Slack|No |
| Labs Settings | permite activar funcionalidades experimentales del sitio|No |
## Tabla escenarios
| # | Funcionalidad | Escenario | Detalles del flujo |
| -------------- | :--------- | :---------- | :--------- |
|  1 |  Post                | Crear Post                | Hacer sign in, - Post, - Crear post, - Regresarse al listado de post y queda en estado draft, - Log out  |
|  2 |  Post                | Editar Post               |  Hacer sign in,Post,Buscar post,Editar el post,Listar posts,Log out |
|  3 |  Post                | Eliminar Post             | Hacer sign in,Post,Buscar post,Eliminar el post,Listar posts,Log out  |
|  4 |  Post                | Publicar Post             |  Hacer sign in,Post,Crear post,Publico el post,Listado de post (published),Log out |
|  5 |  Post                | Adicionar un autor        |  Hacer sign in, Post, Creo/Buscar post, Adiciono un autor, Guardo, Listado de posts, Log out |
|  6 |  Post                | Asociar tag a un post     |  Hacer sign in,Post,Buscar post,Settings,Seleccionar tag,Update,Posts,View post,Log out |
|  7 |  Page                | Crear Page                | Hacer sign in,Page,Crear page,Listar page,Log out  |
|  8 |  Page                | Editar Page               | Hacer sign in,Page,Buscar page,Editar page,Listar page,Log out  |
|  9 |  Page                | Eliminar Page             | Hacer sign in,Page,Buscar page,Eliminar page,Listar page,Log out  |
|  10 | Page                | Publicar Page             | Hacer sign in,Page,Crear page,Publico el page,Listado de pages (published),Log out  |
|  11 | Page                | Asociar tag a un page     |  Hacer sign in,Page,Crear/Editar page,Adicionar tag,Listar page,Visit page,Log out |
|  12 | Tags                | Crear Tag                 | Hacer sign in,Tags,Buscar tag,Crear tag,Listar tag,Log out  |
|  13 | Tags                | Editar Tag                | Hacer sign in,Tags,Buscar tag,Editar tag,Listar tag,Log out  |
|  14 | Tags                | Eliminar Tag              | Hacer sign in,Tags,Buscar tag,Eliminar tag,Listar tags,Log out  |
|  15 | Staff               | Invitar usuario           | Hacer sign in,Staff,Invitar usuario,Listar usuarios,Log out  |
|  16 | Staff               | Editar usuario            |  Hacer sign in,Staff,Active users,Edito ghost user,Listo usuarios,Log out |
|  17 | Staff               | Revoke user               | Hacer sign in,Staff,Invited users,Revoke users,Listo usuarios,Log out  |
|  18 | General Settings    | Editar Title              | Hacer sign in,General Settings,Title & Descrpption,Actualizar title y la descripción,Save,Valido titulo nuevo en el menu lateral,Log out  |
|  19 | Design              | Agregar Menu              |  Sign in,Design,Navigation,Crear nuevo menu,Save,View Site,Log out |
|  20 | Design              | Eliminar Menu             |  Sign in,Design,Navigation,eliminar menu,Save,View Site,Log out |
## Como correr las pruebas con la herramienta Kraken
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Para ejecutar las pruebas en Kraken se debe ingresar a la carpeta proyecto-kraken |
|| Editar el archivo Gemfile y apuntar la gema ‘kraken-mobile’ que tenga instalda en el equipo donde se va a correr la prueba|
|| # Contents of Gemfile |
|| source "https://rubygems.org" |
|| gem 'rubyzip', '1.2.1' # Required version for running calabas-android in Windows |
|| gem 'kraken-mobile' |
|2| Instale las dependencias con el siguiente comando: bundle install |
|3| Opcional: Configurar Kraken with 2 dispositivos y dos usuarios web: ( bundle exec kraken-mobile setup )|
|4| Editar el archivo kraken_properties.json con las credenciales de administrador de la plataforma Ghost |
|5| Ejecute el siguiente comando para ejecutar kraken: (bundle exec kraken-mobile run --properties=”../kraken-properties.json”)|
## Ejecutar Escenarios con la versión 3.3.0 y 3.42.5 de Ghost usando Kraken
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Clonar el repositorio |
|2| Ingresar a la siguiente ruta dentro de su sistema de archivos proyecto-kraken/features/ |
|3| Dentro de la carpeta features va encontrar dos carpetas llamadas ghost-3.3.0 y ghost-3.42.5 |
|3a| Si desea ejecutar los escenarios de la versión 3.3.0 de Ghost, se deben copiar todos los archivos .js que se encuentran dentro de la carpeta ghost-3.3.0 a la carpeta features |
|3b| Si desea ejecutar los escenarios de la versión 3.42.5 de Ghost, se deben copiar todos los archivos .js que se encuentran dentro de la carpeta ghost-3.42.5 a la carpeta features |
|4| Recuerde previamente tener corriendo la versión de Ghost sobre la cual va ejecutar los escenarios |
|5| En una consola de comandos ingresar hasta la carpeta proyecto-kraken |
|6| Ejecutar los escenarios usando el siguiente comando en la consola de comandos: bundle exec kraken-mobile run --properties="../kraken-properties.json" |
|7| En la consola se podra observar la ejecución de los escenarios y también podrá visualizar la ejecución en un navegador Chromium |
|8| Al finalizar la ejecución de los escenarios puede revisar los screenshots de cada pasa ingresando en su sistema de archivos a la ruta proyecto-kraken/reports |
## Como correr las pruebas con la versión 3.3.0 y 3.42.5 de Ghost con la herramienta Cypress
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Ingresar a la carpeta proyecto-cypress |
|2| Configuarar los archivos env :|
|| Ingresar a la carpeta cypress y editar el archivo env.js   |
|| Colocar el valor la url del servidor en la variable "baseURL" dependiendo de la version a realizar pruebas |
|| Ingresar a la carpeta cypress y crear el archivo env_local.js con la estructura de el archivo  env_local_example.js |
|| Colocar el valor de usuario y contraseña en las variables "username" y "password"|
|2| Ejecutar cypress con el siguiente comando: cypress run --spec cypress/integration/ghost3.3.0/*.js* para el caso de ghost3.3.0 para el caso de 3.42.5 cypress run --spec cypress/integration/ghost3.42.5/*.js*  |
## Generar reporte de pruebas visuales de regresión usando ResembleJS
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Clonar el repositorio |
|2| Ingresar en su sistema de archivos a la carpeta resemble |
|3| (Optional) Editar el archivo config.json y en el nodo stories colocar los escenarios a los cuales desea comparar y obtener el reporte, por defecto este archivo tiene todos los 20 escenarios definidos en la documentación |
|4| Asegurarse de haber ejecutado los escenarios de prueba usando Cypress en las dos versiones de Ghost (v3.3.0 y v.3.42.5) con la finalidad de tener los screenshots de las pruebas, recuerde que al ejecutar Cypress el tomará screenshots luego de cada paso o step en la ejecución de un escenario |
|5| Abrir una consola de comandos dentro de la carpeta resemble |
|6| Ejecutar el comando node index.js |
|7| La generación del reporte tomara varios segundos, dependiendo de la cantidad de escenarios que vaya a comparar, así que debe esperar a que el comando previamente ejecutado se complete |
|8| Para ver el reporte ingrese a la carpeta resemble/results en su sistema de archivos |
|9| Podra observar que dentro de esa carpeta se crea una carpeta por cada ejecución del reporte |
|10| Ingrese a la carpeta que se generó más reciente y abra el archivo html que corresponda al escenario del cual quiere ver el reporte (Ej: escenario-04.js.html)|


## Generar reporte de pruebas visuales de regresión usando BackstopJS
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Clonar el repositorio |
|2| Configurar las variables de entorno y asegurarse que los dos entornos de Ghost (versión 3.3.0 y 3.42.5) estén ejecutándose y tengan los mismos datos de acceso (usuario/contraseña)
|3| Ubicarse en la carpeta **proyecto-cypress** |
|4| Ejecutar el comando **cypress run** |
|5| Una vez finalizado el paso anterior, deben haberse generado los screenshots respectivos en cada paso de cada escenario  |
|5| Abrir una consola de comandos dentro de la carpeta backstop |
|6| Ejecutar el comando **backstop test** |
|7| Ejectuar el comando **backstop approve** |
|8| Cambiar el nombre del archivo **backstop.json** por otro nombre |
|9| Renombrar el archivo **backstop to rename.json** a **backstop.json** |
|10| Ejecutar el comando **backstop test**|
|11| Debe desplegarse una ventana en el navegador con el listado de las comparaciones para cado paso y cada escenario (1, 5 y 9)|

## Pros y contras Kraken
| Pros |
| :--------------: |
| Se presenta un nivel más alto de abstracción de las pruebas , ya que la sintaxis de los archivos es basado en lenguaje gerkin |
| Permite la interacción de varios usuarios en el mismo escenario de prueba.|
| Es más sencillo cambiar los entornos de pruebas entre web y móvil |

| Contras |
| :--------------: |
|La documentación no es lo suficientemente robusta para el desarrollo de las actividades de pruebas|
## Pros y contras Cypress
| Pros |
| :--------------: |
| El proceso de instalación en cypres es más sencillo. |
| La documentación y soporte de la herramienta es mejor , se puede encontrar información más fácilmente para el desarrollo de las actividades de pruebas.|
| La comunidad de desarrollo de plugins para cypres es más amplia. |

| Contras |
| :--------------: |
|Solo permite realizar pruebas en un entorno a la vez|

## Pros y contras Resemble
| Pros |
| :--------------: |
| Permite generar reporter legibles visualmente para comporar dos versiones de la misma herramienta generando mas evidencias |
| Se genera en background y no demora mas de unos minutos dependiendo de la cantidad de escenarios |
| Se pueden comparar varios escenarios al mismo tiempo |

| Contras |
| :--------------: |
|En caso de no contar con la misma cantidad de imagenes no se puede comparar |
|Para el reporte se necesita contar con las imagenes en subdirectorios |
|La generacion del reporte es manual |

## Pros y contras BackStop
| Pros |
| :--------------: |
| Tiene unas utilidades para validar de forma manual la diferencia entre dos imágenes |
| Puede llegar a emplearse como una herramienta completa para hacer VRT sin necesidad de utilizar otras |
| La generación del reporte HTML con las diferencias encontradas es automática |

| Crontras |
| :--------------: |
| La configuración del archivo backstop puede llegar a ser tediosa si se tienen varios pasos que se quieren comparar |
| La ejecución de backstop puede llevar a resultados erroneos si no se conoce cómo es que backstop toma las imágenes de referencia |
