class View {
	
	constructor (elemento) {
		this._elemento = elemento;
	}

	template() {
		throw new Error('O método ainda não foi implementado.');
	}

	update (model) {
		this._elemento.innerHTML = this.template(model);
	}
}