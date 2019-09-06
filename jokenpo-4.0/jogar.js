var pd = 'pedra'; var pp = 'papel'; ts = 'tesoura'; var pc; var pcponto = 0, jponto=0;

function iniciar() {
	do{
	nomeJogador = window.prompt("Digite seu nome:", "");
	} while (nomeJogador == null || nomeJogador == "")
	window.alert ("Seu nome é "+nomeJogador);
	document.getElementById("jogadorNome").innerHTML = nomeJogador;
}

function pedra(){
	var mao = pd;
	document.getElementById('jpd').classList.add('sel');
	document.getElementById('jpp').classList.remove('sel');
	document.getElementById('jts').classList.remove('sel');
	jogar(mao);

}

function papel(){
	var mao = pp;
	document.getElementById('jpp').classList.add('sel');
	document.getElementById('jpd').classList.remove('sel');
	document.getElementById('jts').classList.remove('sel');
	jogar(mao);
}

function tesoura(){
	var mao = ts;
	document.getElementById('jts').classList.add('sel');
	document.getElementById('jpp').classList.remove('sel');
	document.getElementById('jpd').classList.remove('sel');
	jogar(mao);
}

function sortear(){
	var x = Math.floor((Math.random() * 3) + 1);

	if(x == 1){
		pc = pp;
		document.getElementById('pcpp').classList.add('sel');
		document.getElementById('pcpd').classList.remove('sel');
		document.getElementById('pcts').classList.remove('sel');
		
	}else if(x == 2){
		pc = pd;
		document.getElementById('pcpd').classList.add('sel');
		document.getElementById('pcpp').classList.remove('sel');
		document.getElementById('pcts').classList.remove('sel');
		
	}else if(x == 3){
		pc = ts;
		document.getElementById('pcts').classList.add('sel');
		document.getElementById('pcpd').classList.remove('sel');
		document.getElementById('pcpp').classList.remove('sel');
	}
}


function jogar(mao){
	sortear();
	var jogadorponto = 0;
	
		if(mao == pc){
			document.getElementById('resultado').innerHTML = "EMPATOU!!!";
		}else if(mao == pd && pc == ts){
			document.getElementById('resultado').innerHTML = "PEDRA QUEBRA TESOURA, VC VENCEU!";
			jponto++;
		}else if(mao == pp && pc == pd){
			document.getElementById('resultado').innerHTML = "PAPEL COBRE PEDRA, VC VENCEU!";
			jponto++;
		}else if(mao == ts && pc == pp){
			document.getElementById('resultado').innerHTML = "TESOURA CORTA PAPEL, VC VENCEU!";
			jponto++;
		}else if(pc == pd && mao == ts){
			document.getElementById('resultado').innerHTML = "PEDRA QUEBRA TESOURA, VC PERDEU!";
			pcponto++;
		}else if(pc == pp && mao == pd){
			document.getElementById('resultado').innerHTML = "PAPEL COBRE PEDRA, VC PERDEU!";
			pcponto++;
		}else if(pc == ts && mao == pp){
			document.getElementById('resultado').innerHTML = "TESOURA CORTA PAPEL, VC PERDEU!";
			pcponto++;
		}
		



			document.getElementById('jogadorPontos').innerHTML = jponto;
			document.getElementById('computadorPontos').innerHTML = pcponto;
			//console.log(pc)
}