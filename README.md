# REACT NATIVE | UDEMY - AGUSTIN NAVARRO

<div align="center" style="padding: 8px 0">
  <img src="https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png" alt="react native logo" width="300">
  <h3 style="padding-top: 16px">Aplicaciones hibridas con React Native</h3>
</div>

## Index

- [Recursos Base](#recursos-base)
  - [Node](#node)
  - [Npm](#npm)
  - [Yarn](#yarn)
  - [Expo](#expo)
- [Iniciando nuestro proyecto](#Iniciando-nuestro-proyecto)
  - [Crear app](#crear-app)
  - [Iniciar nuestra app](#iniciar-nuestra-app)

## Recursos Base

Aquí todo los recusos básicos que usaremos para este proyecto

> Personalmente uso un entorno windows

### Node

<div align="center" style="padding: 16px 0">
  <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="img" width="200">
</div>

Para instalarlo nos dirigimos a la web de [Node.js](https://nodejs.org/es/) y descargamos la versión LTS ya que es la versión estable pero tambien puedes instalar la versión más reciente pero ten en cuenta que pueden ocurrir bugs o errores.

Una vez descargado hacemos lo típico siguiente, siguiente, ... siguiente, instalar y listo

Por conflictos con windows es recomendable instalar la [version 12.9.0](https://nodejs.org/download/release/v12.9.0/)

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Npm

<div align="center" style="padding: 16px 0">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" alt="img" width="200">
</div>

Npm se instalara automaticamente junto con node asi que no nos preocupamos por nada

Y nos ayudara con el manejo de dependencias.

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Yarn

<div align="center" style="padding: 16px 0">
  <img src="https://yarnpkg.com/assets/og_image.png" alt="img" width="200">
</div>

Una alternativa a npm es yarn

Para instalarlo mos dirigimos a la web de [Yarn](https://yarnpkg.com/en/)

Una vez ahi simplemente descargamos el instalador para windows

Es el típico instalador siguiente, siguiente, ... siguiente, instalar y listo

> Usare npm solo por gustos personales

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Expo

<div align="center" style="padding: 16px 0">
  <img src="https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a" alt="img" width="200">
</div>

> Recomendado por React Native

Nos dirigimos a la web de [React Native](https://facebook.github.io/react-native) 

Luego a Get started

Y pasamos a instalar el cli de expo de forma global con el siguiente comando

> Recomendable hacerlo en power Shell o en cmd

```
npm i -g expo-cli
```

O podemos realizarlo con yarn ya que esta xd

```
yarn add global expo-cli
```

Si ocurre algún error del tipo

```
npm WARN tarball tarball data for @expo/traveling-fastlane-darwin@1.10.0 seems to be corrupted. Trying one more time
```

Cancelaremos la instalación con ctrl + c

E instalamos el paquete por separado

```
npm i -g @expo/traveling-fastlane-linux
```

Si el error persiste vamos a verificar la cache

```
npm cache verify
```

O en ultima instancia a limpiarlo

```
npm cache clean --force
```

Si todo sale bien podemos usar el siguiente comando para ver la versión

```
expo --verso | -V
```

O tambien podemos probar los siguientes comandos para todo el tema de registro

```
expo whoami | login | register
```

Si podemos ejectuar estos comandos significa que tenemos el cli de expo correctamente instalado

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

## Iniciando nuestro proyecto

Ejecutamos los siguietnes comando en cmd (por experiencia propia, power shell me da errores y bash no tiene interactive-mode)

### Crear app

Para poder crear nuestra primera app usaremos el sugiente comando

```
expo i 5-tenedores
```

Nos saldra el interactive mode dandonos a elegiar algunas opciones

### Que template queremos usar

Para este proyecto usaremos __blank__ que es el más básico de todos ya que escribiremos la mayor pate del código por nuestra cuenta a modo de práctica :)

### Nombre del proyecto

Simplemente nos ponemos a escribir

Usaremos 5 Tenedores ya que crearemos una app de restautantes

### Manejador de dependencias

Si tenemos yarn instalado nos preguntara si queremoes que este sea el manejador de dependecias

En mi caso usare npm asi que le dire que no

Y entonces empezara al instalación de nuestro proyecto

Una vez terminada la instalación de nuestro proyecto pasamos a ejecutar los siguietnes comandos para entrar al proyecto y para ejecutarlo

```
cd 5-tenedores
npm start # tambien puedes usar: expo start
```

Si al iniciar nuestro proyecto nos genera algún error la solución que encontre fue tener necesariamente [node v12.9](https://nodejs.org/download/release/v12.9.0/) ya que versiones más recientes generan error con windows

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>

### Iniciar nuestra app

De ahora en adelante tenemos 2 opciones

* Usar un teléfono físico
* Usar un Emulador

#### Teléfono físico

En mi caso sera la alternativa que usare ya que tengo miedo que mi laptop explote si uso android estudio :v

Una vez tengamos nuestra app corriendo se nos abrira una ventana del navegador, las expo tools

En esta podremos encontrar un código QR que tendremoes que escanear ¿Peró donde?

Para esto nos tendremos que dirigir a la play store donde tendremos que instalar la app de expo en nuestros celulares

Una vez descargada usaremos el lector qr para ejecutar nuestra app en el mobil

> Es necesario que nuestra pc y celular esten conectados a la misma red

Si llega a salir un error del tipo

`java.net.sockettimeoutexception`

Lo más probable es que sea un problema con la ip

Asi que nos iremos a cmd y ejecutaremos el comando

```
ipconfig
```

Nos mostrata todas nuestras ip y buscaremos la dirección IPv4 de nuestro wifi

Una vez ubicado pasamos a ejecutar el siguiente comando en la carpeta donde esta nuestro proyecto

```
set REACT_NATIVE_PACKAGER_HOSTNAME=my-custom-ip-address
```

Vovlemos a ejecutar npm start y nos aseguramos que el codigo QR que nos de este con la ip que configuramos

Y listo se nos abrira nuestra app de React Native 😁

#### Emulador

> Perdón pero no abarcare nada sobre android estudio ya que no lo usare :c

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>