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
|1| Para ejecutar las pruebas en Kraken se debe ingresar a la carpeta kraken-tests-local |
|| Editar el archivo Gemfile y apuntar la gema ‘kraken-mobile’ que tenga instalda en el equipo donde se va a correr la prueba|
|| # Contents of Gemfile |
|| source "https://rubygems.org" |
|| gem 'rubyzip', '1.2.1' # Required version for running calabas-android in Windows |
|| gem 'kraken-mobile' |
|2| Instale las dependencias con el siguiente comando: bundle install |
|3| Opcional: Configurar Kraken with 2 dispositivos y dos usuarios web: ( bundle exec kraken-mobile setup )|
|4| Editar el archivo kraken_properties.json con las credenciales de administrador de la plataforma Ghost |
|5| Ejecute el siguiente comando para ejecutar kraken: (bundle exec kraken-mobile run --properties=”../kraken-properties.json”)|
## Como correr las pruebas con la herramienta Cypress
| Paso # | Descripción |
| :--------------: | :--------- |
|1| Ingresar a la carpeta proyecto-cypress |
|2| Configuarar los archivos env :|
|| Ingresar a la carpeta cypress y editar el archivo env.js   |
|| Colocar el valor la url del servidor en la variable "baseURL" |
|| Ingresar a la carpeta cypress y crear el archivo env_local.js con la estructura de el archivo  env_local_example.js |
|| Colocar el valor de usuario y contraseña en las variables "username" y "password"|
|2| Ejecutar cypress con el siguiente comando: (cypress open) |
|3| En la interfaz grafica realizar click en la opción :  Run 20 integration specs|
## Pros y contras Kraken
| Pros |
| :--------------: |
| Se presenta un nivel más alto de abstracción de las pruebas , ya que la sintaxis de los archivos es basado en lenguaje gerkin |
| Permite la interacción de varios usuarios en el mismo escenario de prueba.|
| Es más sencillo cambiar los entornos de pruebas entre web y móvil |
| Ventajas |
| :--------------: |
|La documentación no es lo suficientemente robusta para el desarrollo de las actividades de pruebas|
## Pros y contras Cypress
| Pros |
| :--------------: |
| El proceso de instalación en cypres es más sencillo. |
| La documentación y soporte de la herramienta es mejor , se puede encontrar información más fácilmente para el desarrollo de las actividades de pruebas.|
| La comunidad de desarrollo de plugins para cypres es más amplia. |
| Ventajas |
| :--------------: |
|Solo permite realizar pruebas en un entorno a la vez|
