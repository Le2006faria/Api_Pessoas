"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // atributos da classe
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    //método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    //métodos GETTERS and SETTERS
    /**
     * Recupera o parâmetro ao atributo nome
     * @returns nome: nome da pessoa
     */
    getNome() {
        return this.nome;
    }
    /**
     * Atribui nome a pessoa
     * @param _nome
     * nome da pessoa
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getData_nascimento() {
        return this.data_nascimento;
    }
    setData_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome:${this.nome} 
        CPF:${this.cpf} 
        Data:${this.data_nascimento} 
        Telefone:${this.telefone} 
        Endereço:${this.endereco} 
        Altura:${this.altura} 
        Peso:${this.peso}`);
    }
    //implementar os métodos
    falar() {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala ${_frase}`);
    }
    //implementar os métodos
    andar() {
        //lógica de negócio
        console.log(`${this.nome} está andando`);
    }
    andarQuilometros(_quilometros) {
        //lógica de negócio
        setTimeout(() => {
            console.log(`${this.nome} andou ${_quilometros} quilômetros`);
        }, 3000);
    }
    //implementar os métodos
    comer() {
        //lógica de negócio
        console.log(`${this.nome} está comendo`);
    }
    comerPratos(_pratos) {
        //lógica de negócio
        console.log(`${this.nome} estpa comendo ${_pratos}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map