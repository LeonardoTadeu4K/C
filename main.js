alert('Leonardo e Laura')
// function soma(num1,num2){
//     return num1+num2;
// }
// function multiplicacao(num3,num4){
//     return num3*num4;
// }
// function areaquadrado(lado){
//     return lado**2;
// }
// let areatriangulo=function(base,altura){
//     return (base*altura)/2;
// }
// let Cachorro=parseInt('Cachorro');{
// document.write(Cachorro)
// }
// console.log(soma(4000,20));
// console.log(multiplicacao(4000,20));
// console.log(areaquadrado(4000));
// console.log(areatriangulo(4000,21));

let Estado=['Paraná','Rio Grande do Norte','Cachorro','São Paulo','Rio Grande do Sul','Santa Catarina'
    ,'Rio de Janeiro','Mato Grosso do Sul','Mato Grosso','Goiás','Distrito Federal','Espiríto Santo',
    'Minas Gerais','Acre','Amazonia','Roraima','Rondonia','Maranhão','Bahia','Ceará','Amapá','Alagoas',
'Pará','Paraíba','Pernambuco','Piauí','Sergipe','Tocantins'];

// let i=0;
// while(i<Estado.length){
//     console.log(i);
//     console.log(Estado[i])
//     i=i+1;
// }

let idade=parseInt(prompt('qual é a sua idade'));
if(idade>17){
console.log ('Já pode')
}
else{
console.log('Não pode')
}

for (let i=0; i < Estado.length; i++) {
    console.log(Estado[i]);
}