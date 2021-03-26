class Pessoa{
    constructor(nome , sobrenome)
    {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }


 
}


const p1 = new Pessoa('Gustavo' , 'Melo');
const p2 = new Pessoa('joao' , 'Goncalves');


console.log(p1, p2);