import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa (`João`,
                        `11111111111111`,
                        new Date(2000, 9, 15),
                        `000000000`,
                        `Rua Número 1`,
                        170,
                        70);

pessoa.mostraPessoa();

pessoa.falar();
pessoa.falarFrase("VAI CURINTIA!!!!");

pessoa.andar();
pessoa.andarQuilometros(20);

pessoa.comer();
pessoa.comerPratos("batata");
