export class Pessoa {

    // atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor(_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
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
    public getNome() { // get =  recuperar - não tem parametro, tem retorno
        return this.nome;
    }

    /**
     * Atribui nome a pessoa
     * @param _nome
     * nome da pessoa
     */
    public setNome(_nome: string) { // set = atribuir - tem parametro, não tem retorno
        this.nome = _nome;
    }

    public getCpf() {
        return this.cpf;
    }
    public setCpf(_cpf: string) {
        this.cpf = _cpf;
    }

    public getData_nascimento() {
        return this.data_nascimento;
    }
    public setData_nascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }

    public getTelefone() {
        return this.telefone;
    }
    public setTelefone(_telefone: string) {
        this.telefone = _telefone;
    }

    public getEndereco() {
        return this.endereco;
    }
    public setEndereco(_endereco: string) {
        this.endereco = _endereco;
    }

    public getAltura() {
        return this.altura;
    }
    public setAltura(_altura: number) {
        this.altura = _altura;
    }

    public getPeso() {
        return this.peso;
    }
    public setPeso(_peso: number) {
        this.peso = _peso;
    }

    public mostraPessoa() {
        console.log(`Nome:${this.nome} 
        CPF:${this.cpf} 
        Data:${this.data_nascimento} 
        Telefone:${this.telefone} 
        Endereço:${this.endereco} 
        Altura:${this.altura} 
        Peso:${this.peso}`);
    }

    //implementar os métodos
    public falar(): void {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }

    public falarFrase(_frase: string) {
        //lógica de negócio
        console.log(`${this.nome} fala ${_frase}`);
    }

    //implementar os métodos
    public andar(): void {
        //lógica de negócio
        console.log(`${this.nome} está andando`);
    }

    public andarQuilometros(_quilometros: number) {
        //lógica de negócio
        setTimeout(() =>{
        console.log(`${this.nome} andou ${_quilometros} quilômetros`);
        }, 3000);
    }

    //implementar os métodos
    public comer(): void {
        //lógica de negócio
        console.log(`${this.nome} está comendo`);
    }

    public comerPratos(_pratos: string) {
        //lógica de negócio
        console.log(`${this.nome} está comendo ${_pratos}`);
    }

    /**
     * CRUD
     */
}