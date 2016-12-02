class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		
		this._inputQuantidade = $('#quantidade');
		this._inputData = $('#data');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		event.preventDefault();

		let negociacao = new Negociacao(
			this._inputData.value,
			this._inputQuantidade,
			this._inputValor)
		;


		console.log(negociacao);
		// TODO add a negociação na lista
	}
}