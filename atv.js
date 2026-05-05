let valor=0, resultado=0, number=0;



valor=Number(prompt("Qual valor da sua compra final?"))

if (valor>=100) {
    resultado=valor*0.9
    alert("Você ganhou 10% de desconto na sua compra, seu descontou deu R$"+resultado)
} else {
    resultado=valor;
    alert("Você não conseguiu desconto nessa compra, ficou R$"+resultado)
}
