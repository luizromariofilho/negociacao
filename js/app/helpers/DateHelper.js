class DateHelper {
	textoParaData (texto) {
		return new Date(...texto.split('-').map((item, index) => item - index % 2);
	}

	dataParaTexto (data) {

	}

}