var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout);

const { validacion } = require('./funtions/validacion');

const { opcionesImprimirNumeros } = require('./funtions/opciones');

rl.setPrompt('Introduzca el numero con la forma 0,000 (Para cerrar digite 0,0)> ');
rl.prompt();

rl.on('line', function (linea) {
  if (linea === "0,0") {
    rl.close();
  }
  try {
    var datos = validacion(linea);
    var size = datos.size;
    var numerosGraficar = datos.numbers;
    opcionesImprimirNumeros(size,numerosGraficar);    
  } catch (error) {
    console.log(error.message);
}
rl.prompt();
}).on('close', function () {
  console.log('¡Que tengas un gran día!');
  process.exit(0);
});