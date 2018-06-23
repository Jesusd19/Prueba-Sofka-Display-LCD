# Prueba tecnica
## Display LCD
**Objetivo**: Crear un programa que imprime números en estilo de una pantalla LCD
**Entrada**: La entrada contiene varias líneas. Cada línea contiene 2 números separados por coma. El primer
número representa el tamaño de la impresión (entre 1 y 10 – esta variable se llama “size”). El segundo número
es el número a mostrar en la pantalla. Para terminar, se debe digitar 0,0. Esto terminará la aplicación.

**Salida**: Imprimir los números especificados usando el carácter “-“ para los caracteres horizontales, y “|” para
los verticales. Cada dígito debe ocupar exactamente size+2 columnas y 2*size + 3 filas.
Entre cada impresión debe haber una línea blanca.

## Software:
- Primero en la terminal escribir el comando 
    `$ npm install`

- Despues ejecutamos el comando
    `$ node ./src/index.js`
Para correr el programa.

Estando en el programa saldra el siguiente mensaje:

*Introduzca el numero con la forma 0,000 (Para cerrar digite 0,0)>*

Al pasarle una secuencia validas obtenemos:

```
Introduzca el numero con la forma 0,000 (Para cerrar digite 0,0)> 2,12345

           - -     - -             - -
       |       |       | |     | |
       |       |       | |     | |
           - -     - -     - -     - -
       | |             |       |       |
       | |             |       |       |
           - -     - -             - -
Introduzca el numero con la forma 0,000 (Para cerrar digite 0,0)> 3,67890
   - - -     - - -     - - -     - - -     - - -
 |                 | |       | |       | |       |
 |                 | |       | |       | |       |
 |                 | |       | |       | |       |
   - - -               - - -     - - -
 |       |         | |       |         | |       |
 |       |         | |       |         | |       |
 |       |         | |       |         | |       |
   - - -               - - -     - - -     - - -
Introduzca el numero con la forma 0,000 (Para cerrar digite 0,0)> 0,0
¡Que tengas un gran día!
```

Y por ultimo para ejecutar el test
`$ node test` 
