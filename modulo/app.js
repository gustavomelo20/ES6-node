const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome());


const {Pessoa} = require('./pessoa');
const p1 = new Pessoa('Carolina');
console.log(p1)