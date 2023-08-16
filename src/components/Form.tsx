function Form() {
  return (
    <div className="form-container">
      <label htmlFor="nome-servico">Nome do serviço:</label>
      <input type="text" id="nome-servico" />

      <label htmlFor="login">Login:</label>
      <input type="text" id="login" />

      <label htmlFor="senha">Senha:</label>
      <input type="password" id="senha" />

      <label htmlFor="url">URL:</label>
      <input type="text" id="url" />

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </div>
  );
}

export default Form;
