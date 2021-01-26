const db = require('../db.json');

challangeElixir(db.itens, db.emails);

function challangeElixir(itens, emails) {
  //  Varibles
  let total = 0;
  let share = 0;  
  let result = [];

  // 1º Adicionar a multiplicação entre price e amount em um array (caso sejam valores > 0)
  const calc = itens.map(iten => {
    const res = iten.price && iten.amount >= 0 
    ? iten.price * iten.amount 
    : console.log('Houve um erro nos valores'); 
    
    return res;
  });
  // 2º Fazer o calculo e retornar o valor total
  for(let i = 0; i < calc.length; i++ ) total += calc[i];
  //  3º Dividir o valor total pela quantidade de emails
  if(!!total) share += parseInt((total / emails.length));
  // 4º Mostrar a lista
  for(let i = 0; i < emails.length; i++) result += `O email: ${emails[i]} devera pagar ${share}, `;
  // 5º Enviar email e quanto ele ira pagar
  return console.log(result);
};


