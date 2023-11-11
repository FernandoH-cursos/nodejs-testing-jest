import { buildMakePerson } from "./js-foundation/05-factory";
import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

const { getAge, getUUID } = require('./plugins');

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');

/* getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( err ) => console.log( err ) )
  .finally( () => console.log('Finalmente') ); */


// const logger = buildLogger("app.ts");
// logger.log("Hola mundo");
// logger.error("Esto es algo malo")

// token de acceso
// Publicas

// ! Referencia a la función factory y uso
/* const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1985-10-21' };

const john = makePerson( obj );

console.log({ john }); */

