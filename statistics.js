function processaArray(array){
	for(var i = 0; i < array.length; i++){
		array[i] = parseFloat(array[i]);
	}

	array.sort();

	return array;
}

function media(vetor){

	var x = 0;

	for(var i = 0; i < vetor.length; i++){
		x = x + vetor[i];
	}

	x = x/vetor.length;

	return x;
}

function mediana(vetor){
	var i = (vetor.length)/2;

	if(typeof(i) != "int"){
		i= parseInt(i);
		i++;
	}

	var md = vetor[i];

	return md;
}

function moda(vetor){
	var frequente = 0;
	var frequencia = [];

	for(var i = 0; i < vetor.length; i++){
		frequencia[i] = 0;
		frequente = vetor[i];

		for(var j = 0; j < vetor.length; j++){
			if(vetor[j] == frequente){
				frequencia[i]++;
			}
		}
	}

	var maior = frequencia[0];
	var maiorFreq = [];

	for(var i = 0; i < frequencia.length; i++){
		if(frequencia[i] > maior){
			maiorFreq.push(vetor[i]);
		}
	}

	var md = 0;

	if(maiorFreq.length == 1){
		md = maiorFreq[0];
	} else {
		for(var i = 0; i < maiorFreq.length; i++){
			md = md+maiorFreq[i];
		}

		md = md/(maiorFreq.length);
	}

	return md;
}
