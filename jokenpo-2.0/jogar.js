var pd = 'pedra'; var pp = 'papel'; ts = 'tesoura'; var pc;

function pedra(){
	var mao = pd;
	jogar(mao);
}

function papel(){
	var mao = pp;
	jogar(mao);
}

function tesoura(){
	var mao = ts;
	jogar(mao);
}

function sortear(){
	var x = Math.floor((Math.random() * 3) + 1);

	if(x == 1){
		pc = pp;
	}else if(x == 2){
		pc = pd;
	}else if(x == 3){
		pc = ts;
	}
}


function jogar(mao){
	sortear();

	
		if(mao == pc){
			document.getElementById('resultado').innerHTML = "O pc escolheu: " + pc + ", Empatou!!!";
		}else if(mao == pd && pc == ts){
			document.getElementById('resultado').innerHTML = "o pc escolheu: " + pc + ", pedra quebra tesoura, vc venceu!";
		}else if(mao == pp && pc == pd){
			document.getElementById('resultado').innerHTML = "o pc escolheu: " + pc + ", papel cobre pedra, vc venceu!";
		}else if(mao == ts && pc == pp){
			document.getElementById('resultado').innerHTML = "o pc escolheu: " + pc + ", tesoura corta papel, vc venceu!";
		}else if(pc == pd && mao == ts){
			document.getElementById('resultado').innerHTML = "o pc escolheu: " + pc + ", pedra quebra tesoura, vc perdeu!";
		}else if(pc == pp && mao == pd){
			document.getElementById('resultado').innerHTML = "o pc escolheu: " + pc + ", papel cobre pedra, vc perdeu!";
		}else if(pc == ts && mao == pp){
			document.getElementById('resultado').innerHTML = "o pc escolheu: " + pc + ", tesoura corta papel, vc perdeu!";
		}
	

			//document.getElementById('resultado').innerHTML = pc;
			//console.log(pc)
}