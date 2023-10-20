"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`João`, `11111111111111`, new Date(2000, 9, 15), `000000000`, `Rua Número 1`, 170, 70);
pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("VAI CURINTIA!!!!");
pessoa.andar();
pessoa.andarQuilometros(20);
pessoa.comer();
pessoa.comerPratos("batata");
//# sourceMappingURL=teste.js.map