//Modules - Encapsulated code (only share minimum)
//Every file in node is a module
const names = require('./FirstModule');
const sayHi = require('./SecondModule');
const imports = require('./AlternativeConvention');
require('./MindGrenade');

console.log(imports);
sayHi('Faith');
sayHi(names.josh)
sayHi(names.david)