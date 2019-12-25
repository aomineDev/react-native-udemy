# REACT NATIVE | UDEMY - AGUSTIN NAVARRO

<div align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="react native logo" width="300">
  <h2 style="padding-top: 16px">Aplicaciones hibridas con React Native ⚛ y Firebase 🔥</h2>
</div>

## Recursos a usar

* node
* npm
* yarn(opcional)
* expo-cli

### Node

Nos dirigimos a la web de  [Node.js](https://nodejs.org/es/) y descargamos la versión LTS ya que es la versión estable pero tambien puedes instalar la versión más reciente pero ten en cuenta que pueden ocurrir bugs o errores.

### NPM

Npm se instalara automaticamente junto con node y nos ayudara al manejo de dependencias.

### Yarn

Una alternativa a npm es yarn

> Windows

Nos dirigimos a la web de [Yarn](https://yarnpkg.com/en/)

Una vez ahi simplemente descargamos el instalador

Es el típico instalador siguiente, siguiente, ... siguiente, instalar y listo

> Usare npm por costumbre

### expo-cli

> Recomendado por React Native

Nos dirigimos a la web de [React Native](https://facebook.github.io/react-native) 

Luego a Get started

Y pasamos a usar los comandos resaltados

> Windows - Recomendable hacerlo en power Shell o en cmd

```
npm i -g expo-cli
```

o podemos realizarlo con yarn ya que esta xd

```
yarn add global expo-cli
```

Si ocurre algun error con del tipo

```
npm WARN tarball tarball data for @expo/traveling-fastlane-darwin@1.10.0 seems to be corrupted. Trying one more time
```

Cancelar la instalación e instalar el paquete por separado

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

## Iniciando el proyecto

> Ejecutamos el comando en cmd (por experiencia propia, power shell me da errores y bash no tiene interactive-mode)

```
expo i 5-tenedores
```

Nos saldra en interactive mode dandonos a elegiar que template queremos usar

Para este proyecto usaremos __blank__

Despues nos dara la opcipon de elegir el nombre del proyecto

Usaremos 5 Tenedores

y por ultimo si quieres usar yarn

En mi caso usare npm asi que le dire que no

Una vez terminada la instalación de nuestro proyecto pasamos a ejecutar los siguietnes comandos para verlo

```
cd 5-tenedores
npm start # you can also use: expo start
```

Si al iniciar nuestro proyecto nos genera algún error la solución que encontre fue instalar [node v12.9](https://nodejs.org/download/release/v12.9.0/) ya que versiones más recientes generan error con windows