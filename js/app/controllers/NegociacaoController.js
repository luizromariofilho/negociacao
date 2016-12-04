class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		
		this._inputQuantidade = $('#quantidade');
		this._inputData = $('#data');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		event.preventDefault();

<<<<<<< HEAD
		let data = new Date(...
			this._inputData.value
				.split('-')
				.map((item, index) => item - index % 2)
			);
		
		let negociacao = new Negociacao (
			data,
			this._inputQuantidade.value,
			this._inputValor.value);
		console.log(negociacao);
=======
		let negociacao = new Negociacao(
			this._inputData.value,
			this._inputQuantidade,
			this._inputValor)
		;


		console.log(negociacao);
		// TODO add a negociação na lista
>>>>>>> aa40febdb76a08f6d73bd8b80c5685c2a0fc9e76
	}
}