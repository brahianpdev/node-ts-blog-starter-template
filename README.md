<p align="center">
  <a href="https://github.com/brahianpdev?tab=repositories" target="blank"><img src="https://miro.medium.com/max/1400/0*a6oSE8C5z6SjVtjj.png" width="320" alt="Nest Logo" /></a>
</p>

# Starter Template - [Blog]

Este es un proyecto a modo de investigación práctica donde busco implementar buenas prácticas.

La plantilla de inicio tiene funcionalidades básicas que se detallarán en la documentación de los *endpoints* correspondientes.

## Un acercamiento a las funcionalidades principales:

- Una vez que te registres, recibirás un correo electrónico para confirmar tu cuenta. Si la cuenta no está confirmada, no podrá iniciar sesión.
- Para la creación de Posts, Comentarios y Categorías, así como para subir el Avatar de tu Usuario, se utilizan cookies para saber si estás *logueado*, y además, se verifica la validez del *JWT*.
- El usuario se crea como "USER" por defecto. Y solo los administradores "ADMIN" son los que pueden tener acciones para eliminar comentarios, categorías o usuarios.
- Como extra, se ha integrado [***Nodemailer***](https://nodemailer.com/about/) para el envio de mails mediante gmail, así como [***Cloudinary***](https://cloudinary.com/) para almacenar el url del avatar del usuario en dicha nube.

## Tecnologías utilizadas:

- Node.js
- Express.js
- Typescript (Lenguaje de programación tipado)
- Mongoose (ODM: Object Data Modeling)
- MongoDB (Base de datos)
- Postman (Test & Documentación)

> ***Puedes revisar la documentación de los Endpoints para cada feature desde este link.***
> 

## Instalaciones y configuraciones necesarias:

- Hacer git clone de [***este repositorio***](https://github.com/brahianpdev/node-ts-blog-starter-template), e instalar las dependencias necesarias. Para esto, abre tu terminal de preferencia, sitúate en el escritorio o la carpeta que desees y ejecuta:

```bash
git clone https://github.com/brahianpdev/node-ts-blog-starter-template.git
```

- Una vez se haya hecho el clon de dicho repositorio, procedes a instalar las dependencias:

```bash
npm install
```

- Una vez se hayan instalado las dependencias necesarias, procedes a iniciar dicho proyecto:

```bash
npm run dev
```

> *En este punto, seguramente obtengas errores. Para solucionarlos, debes agregar los valores correspondientes en las variables de entorno, así como para la configuración del servicio de imagenes Cloudinary, y la conexión a la base de datos mediante [**MongoAtlas**](https://www.mongodb.com/).*
> 

- Crea un archivo llamado `.env` en la raíz de tu proyecto, y en él, agrega las siguientes variables:

```bash
BASE_URL=localhost:3000
PORT=3000
MONGO_URL=LaUrlDeConexiónAMongoDB

JWT_SECRET=UnaPasswordSecretaQueSoloTúSepas
JWT_EXPIRATION=60 * 60

NODEMAILER_HOST='smtp.gmail.com'
NODEMAILER_SERVICE='gmail'
NODEMAILER_USER=
NODEMAILER_PASSWORD='LaContraseñaSecretaQueTeDaGmailParaNodeMailer'
NODEMAILER_SENDMAIL_TO=
```

- Una vez tengas configuradas dichas variables de entorno, dirígete al archivo `cloudinaryConfig.ts` dentro de la carpeta `src/configuration`

> *Es importante mencionar, que Cloudinary no acepta los valores que vienen desde las variables de entorno (o aún no encuentro una forma de hacerlo correctamente), por lo que, deberás en un principio agregarlos directamente, y asegurarte de no commitear éste archivo para no exponer tus credenciales de carácter sensible.*
> 

```tsx
const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "TuNombreDeCloudNameEnCloudinary",
  api_key: "TuApiKey",
  api_secret: "TuApiSecret",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

export default storage;
```

- En este punto, efectivamente podrás inicializar el proyecto de forma exitosa mediante el comando mencionado anteriormente. Aparecerá el siguiente mensaje:

```bash
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
Server is ready to take our messages
Connected to MongoDB
🔥 Server is running at port 3000
```

## Cómo colaborar con éste proyecto

Para colaborar con éste proyecto, en un principio, deberás haber realizado los pasos anteriores referente a la instalación y configuración necesaria. Posteriormente, puedes revisar los ***[issues](https://github.com/brahianpdev/node-ts-blog-starter-template/issues)*** donde estarán detalladas algunas tareas pendientes, así como también proponer una ***feature*** que consideres útil para un sistema de Blog.

Asumiendo que en insta instancia tienes el proyecto corriendo de manera exitosa de forma local, detallaré de forma breve, cómo colaborar con el mismo. 

- Crear una nueva rama de forma local, en la cual posteriormente desarrollarás las features que consideres, así como solucionar bugs existentes e incluso optimizar código. A modo de ejemplo, supondré que se desea desarrollar un sistema de Newsletter.

 

```bash
git branch newsletter
git checkout newsletter
```

Luego de haber desarrollado dicha *feature* para el servicio de *newsletter*, debes hacer un ***commit*** de los cambios que corresponden a la misma. Una vez hecho esto, debes ***pushear*** los cambios...

> Puedes ver a más detalle cómo realizar un pull request [**aquí**](https://www.freecodecamp.org/espanol/news/como-hacer-tu-primer-pull-request-en-github/).
>

Este es un proyecto a modo de investigación práctica donde busco implementar buenas prácticas.

La plantilla de inicio tiene funcionalidades básicas que se detallarán en la documentación de los *endpoints* correspondientes.

## Un acercamiento a las funcionalidades principales:

- Una vez que te registres, recibirás un correo electrónico para confirmar tu cuenta. Si la cuenta no está confirmada, no podrá iniciar sesión.
- Para la creación de Posts, Comentarios y Categorías, así como para subir el Avatar de tu Usuario, se utilizan cookies para saber si estás *logueado*, y además, se verifica la validez del *JWT*.
- El usuario se crea como "USER" por defecto. Y solo los administradores "ADMIN" son los que pueden tener acciones para eliminar comentarios, categorías o usuarios.
- Como extra, se ha integrado [***Nodemailer***](https://nodemailer.com/about/) para el envio de mails mediante gmail, así como [***Cloudinary***](https://cloudinary.com/) para almacenar el url del avatar del usuario en dicha nube.

## Tecnologías utilizadas:

- Node.js
- Express.js
- Typescript (Lenguaje de programación tipado)
- Mongoose (ODM: Object Data Modeling)
- MongoDB (Base de datos)

## Instalaciones y configuraciones necesarias:

- Hacer git clone de [***este repositorio***](https://github.com/brahianpdev/node-ts-blog-starter-template), e instalar las dependencias necesarias. Para esto, abre tu terminal de preferencia, sitúate en el escritorio o la carpeta que desees y ejecuta:

```bash
git clone https://github.com/brahianpdev/node-ts-blog-starter-template.git
```

- Una vez se haya hecho el clon de dicho repositorio, procedes a instalar las dependencias:

```bash
npm install
```

- Una vez se hayan instalado las dependencias necesarias, procedes a iniciar dicho proyecto:

```bash
npm run dev
```

> *En este punto, seguramente obtengas errores. Para solucionarlos, debes agregar los valores correspondientes en las variables de entorno, así como para la configuración del servicio de imagenes Cloudinary, y la conexión a la base de datos mediante [**MongoAtlas**](https://www.mongodb.com/).*
> 

- Crea un archivo llamado `.env` en la raíz de tu proyecto, y en él, agrega las siguientes variables:

```bash
BASE_URL=localhost:3000
PORT=3000
MONGO_URL=LaUrlDeConexiónAMongoDB

JWT_SECRET=UnaPasswordSecretaQueSoloTúSepas
JWT_EXPIRATION=60 * 60

NODEMAILER_HOST='smtp.gmail.com'
NODEMAILER_SERVICE='gmail'
NODEMAILER_USER=
NODEMAILER_PASSWORD='LaContraseñaSecretaQueTeDaGmailParaNodeMailer'
NODEMAILER_SENDMAIL_TO=
```

- Una vez tengas configuradas dichas variables de entorno, dirígete al archivo `cloudinaryConfig.ts` dentro de la carpeta `src/configuration`

> *Es importante mencionar, que Cloudinary no acepta los valores que vienen desde las variables de entorno (o aún no encuentro una forma de hacerlo correctamente), por lo que, deberás en un principio agregarlos directamente, y asegurarte de no commitear éste archivo para no exponer tus credenciales de carácter sensible.*
> 

```tsx
const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "TuNombreDeCloudNameEnCloudinary",
  api_key: "TuApiKey",
  api_secret: "TuApiSecret",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

export default storage;
```

- En este punto, efectivamente podrás inicializar el proyecto de forma exitosa mediante el comando mencionado anteriormente. Aparecerá el siguiente mensaje:

```bash
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
Server is ready to take our messages
Connected to MongoDB
🔥 Server is running at port 3000
```

## Cómo colaborar con éste proyecto

Para colaborar con éste proyecto, en un principio, deberás haber realizado los pasos anteriores referente a la instalación y configuración necesaria. Posteriormente, puedes revisar los ***[issues](https://github.com/brahianpdev/node-ts-blog-starter-template/issues)*** donde estarán detalladas algunas tareas pendientes, así como también proponer una ***feature*** que consideres útil para un sistema de Blog.

Asumiendo que en insta instancia tienes el proyecto corriendo de manera exitosa de forma local, detallaré de forma breve, cómo colaborar con el mismo. 

- Crear una nueva rama de forma local, en la cual posteriormente desarrollarás las features que consideres, así como solucionar bugs existentes e incluso optimizar código. A modo de ejemplo, supondré que se desea desarrollar un sistema de Newsletter.

 

```bash
git branch newsletter
git checkout newsletter
```

Luego de haber desarrollado dicha *feature* para el servicio de *newsletter*, debes hacer un ***commit*** de los cambios que corresponden a la misma. Una vez hecho esto, debes ***pushear*** los cambios...

> Puedes ver a más detalle cómo realizar un pull request [**aquí**](https://www.freecodecamp.org/espanol/news/como-hacer-tu-primer-pull-request-en-github/).
>

Este es un proyecto a modo de investigación práctica donde busco implementar buenas prácticas.

La plantilla de inicio tiene funcionalidades básicas que se detallarán en la documentación de los *endpoints* correspondientes.

## Un acercamiento a las funcionalidades principales:

- Una vez que te registres, recibirás un correo electrónico para confirmar tu cuenta. Si la cuenta no está confirmada, no podrá iniciar sesión.
- Para la creación de Posts, Comentarios y Categorías, así como para subir el Avatar de tu Usuario, se utilizan cookies para saber si estás *logueado*, y además, se verifica la validez del *JWT*.
- El usuario se crea como "USER" por defecto. Y solo los administradores "ADMIN" son los que pueden tener acciones para eliminar comentarios, categorías o usuarios.
- Como extra, se ha integrado [***Nodemailer***](https://nodemailer.com/about/) para el envio de mails mediante gmail, así como [***Cloudinary***](https://cloudinary.com/) para almacenar el url del avatar del usuario en dicha nube.

## Tecnologías utilizadas:

- Node.js
- Express.js
- Typescript (Lenguaje de programación tipado)
- Mongoose (ODM: Object Data Modeling)
- MongoDB (Base de datos)


## Instalaciones y configuraciones necesarias:

- Hacer git clone de [***este repositorio***](https://github.com/brahianpdev/node-ts-blog-starter-template), e instalar las dependencias necesarias. Para esto, abre tu terminal de preferencia, sitúate en el escritorio o la carpeta que desees y ejecuta:


```bash
git clone https://github.com/brahianpdev/node-ts-blog-starter-template.git
```


- Una vez se haya hecho el clon de dicho repositorio, procedes a instalar las dependencias:

```bash
npm install
```


- Una vez se hayan instalado las dependencias necesarias, procedes a iniciar dicho proyecto:

```bash
npm run dev
```


> *En este punto, seguramente obtengas errores. Para solucionarlos, debes agregar los valores correspondientes en las variables de entorno, así como para la configuración del servicio de imagenes Cloudinary, y la conexión a la base de datos mediante [**MongoAtlas**](https://www.mongodb.com/).*
> 

- Crea un archivo llamado `.env` en la raíz de tu proyecto, y en él, agrega las siguientes variables:

```bash
BASE_URL=localhost:3000
PORT=3000
MONGO_URL=LaUrlDeConexiónAMongoDB

JWT_SECRET=UnaPasswordSecretaQueSoloTúSepas
JWT_EXPIRATION=60 * 60

NODEMAILER_HOST='smtp.gmail.com'
NODEMAILER_SERVICE='gmail'
NODEMAILER_USER=
NODEMAILER_PASSWORD='LaContraseñaSecretaQueTeDaGmailParaNodeMailer'
NODEMAILER_SENDMAIL_TO=
```


- Una vez tengas configuradas dichas variables de entorno, dirígete al archivo `cloudinaryConfig.ts` dentro de la carpeta `src/configuration`


> *Es importante mencionar, que Cloudinary no acepta los valores que vienen desde las variables de entorno (o aún no encuentro una forma de hacerlo correctamente), por lo que, deberás en un principio agregarlos directamente, y asegurarte de no commitear éste archivo para no exponer tus credenciales de carácter sensible.*
> 

```tsx
const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "TuNombreDeCloudNameEnCloudinary",
  api_key: "TuApiKey",
  api_secret: "TuApiSecret",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

export default storage;
```


- En este punto, efectivamente podrás inicializar el proyecto de forma exitosa mediante el comando mencionado anteriormente. Aparecerá el siguiente mensaje:

```bash
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
Server is ready to take our messages
Connected to MongoDB
🔥 Server is running at port 3000
```

## Cómo colaborar con éste proyecto

Para colaborar con éste proyecto, en un principio, deberás haber realizado los pasos anteriores referente a la instalación y configuración necesaria. Posteriormente, puedes revisar los ***[issues](https://github.com/brahianpdev/node-ts-blog-starter-template/issues)*** donde estarán detalladas algunas tareas pendientes, así como también proponer una ***feature*** que consideres útil para un sistema de Blog.

Asumiendo que en insta instancia tienes el proyecto corriendo de manera exitosa de forma local, detallaré de forma breve, cómo colaborar con el mismo. 

- Crear una nueva rama de forma local, en la cual posteriormente desarrollarás las features que consideres, así como solucionar bugs existentes e incluso optimizar código. A modo de ejemplo, supondré que se desea desarrollar un sistema de Newsletter.

 

```bash
git branch newsletter
git checkout newsletter
```

Luego de haber desarrollado dicha *feature* para el servicio de *newsletter*, debes hacer un ***commit*** de los cambios que corresponden a la misma. Una vez hecho esto, debes ***pushear*** los cambios...

> Puedes ver a más detalle cómo realizar un pull request [**aquí**](https://www.freecodecamp.org/espanol/news/como-hacer-tu-primer-pull-request-en-github/).
>