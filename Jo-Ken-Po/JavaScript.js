var pontosus = 0;
var pontospc = 0;
var empate = 0;
var vencedor;


function game(){

function PrimeiraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var jogada = PrimeiraLetra(prompt("Digite sua jogada: "));
var jogadapc = Math.random() * 3;


if (jogada !== 'Pedra' && jogada !== 'Papel' && jogada !== 'Tesoura') {
	alert("ERROR!,\nPágina atualizada!");
	window.location.reload();
}

if (jogadapc <= 1) {
	jogadapc = 'Pedra';

}
else if (jogadapc <= 2) {
	jogadapc = 'Papel';
}
else if (jogadapc <= 3){
	jogadapc = 'Tesoura';
}


if (jogada === 'Pedra'){
	if (jogadapc === 'Tesoura') {
		vencedor = 'Jogador Win!';
	}else if (jogadapc === 'Papel') {
		vencedor = 'Computador Win!';
	}else if (jogadapc === 'Pedra') {
		vencedor = 'Empatou!';
	}
}

else if (jogada === 'Papel') {
	if (jogadapc === 'Pedra') {
		vencedor = 'Jogador Win!';
	}else if (jogadapc === 'Tesoura') {
		vencedor = 'Computador Win!';
	}else if (jogadapc === 'Papel') {
		vencedor = 'Empatou!';
	}
}

else if (jogada === 'Tesoura') {
	if (jogadapc === 'Papel') {
		vencedor = 'Jogador Win!';
	}else if (jogadapc === 'Pedra') {
		vencedor = 'Computador Win!';
	}else if (jogadapc === 'Tesoura') {
		vencedor = 'Empatou!';
	}
}

if (vencedor === 'Jogador Win!') {
	pontosus = pontosus + 1;
}else if (vencedor === 'Computador Win!') {
	pontospc = pontospc + 1;
}else{
	empate = empate + 1;
}


document.getElementById('jogadaJogador').innerHTML= jogada;
document.getElementById('jogadaComputador').innerHTML= jogadapc;
document.getElementById('Vencedor').innerHTML= vencedor;

document.getElementById('pontos-jogador').innerHTML= pontosus;
document.getElementById('pontos-pc').innerHTML= pontospc;
document.getElementById('pontos-empate').innerHTML= empate;

}
