const nome = "Gustavo";
const sobrenome = "Melo";


const falaNome = () => nome + ' ' + sobrenome;

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
