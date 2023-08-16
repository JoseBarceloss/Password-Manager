import React, { FormEvent, useState } from 'react';

export type ValueProps = {
  nomeServico: string,
  login: string,
  senha: string,
  url: string,
};

type FormProps = {
  onRegister: (formValue: ValueProps,) => void;
  onCancel: () => void;
};

function Form({ onCancel, onRegister }: FormProps) {
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false); // Novo estado

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const isButtonDisabled = () => (
    nomeServico === ''
    || login === ''
    || senha.length < 8
    || senha.length > 16
    || !/\d/.test(senha)
    || !/[a-zA-Z]/.test(senha)
    || !/[!@#$%^&*]/.test(senha)
  );

  const isPasswordValid = (validation: boolean) => (
    validation ? 'valid-password-check' : 'invalid-password-check'
  );

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegister({
      nomeServico,
      login,
      senha,
      url,
    });
  };

  return (
    <div>
      <form className="formulario" onSubmit={ onSubmitForm }>
        <label className="label-form" htmlFor="nome-servico">Nome do serviço</label>
        <input
          className="input-form"
          type="text"
          id="nome-servico"
          value={ nomeServico }
          onChange={ (e) => setNomeServico(e.target.value) }
        />

        <label className="label-form" htmlFor="login">Login</label>
        <input
          className="input-form"
          type="text"
          id="login"
          value={ login }
          onChange={ (e) => setLogin(e.target.value) }
        />

        <label className="label-form" htmlFor="senha">Senha</label>
        <input
          className="input-form"
          type={ senhaVisivel ? 'text' : 'password' }
          id="senha"
          value={ senha }
          onChange={ (e) => setSenha(e.target.value) }
        />
        <button
          className="show-hide-button"
          type="button"
          data-testid="show-hide-form-password"
          onClick={ toggleSenhaVisivel }
        >
          {senhaVisivel ? 'Esconder' : 'Mostrar'}
          {' '}
          senha
        </button>

        <label className="label-form" htmlFor="url">URL</label>
        <input
          className="input-form"
          type="text"
          id="url"
          value={ url }
          onChange={ (e) => setUrl(e.target.value) }
        />

        <div className="requiset">
          <p className={ isPasswordValid(senha.length >= 8) }>
            Possuir 8 ou mais caracteres
          </p>
          <p className={ isPasswordValid(senha.length <= 16) }>
            Possuir até 16 caracteres
          </p>
          <p className={ isPasswordValid(/\d/.test(senha) && /[a-zA-Z]/.test(senha)) }>
            Possuir letras e números
          </p>
          <p className={ isPasswordValid(/[!@#$%^&*]/.test(senha)) }>
            Possuir algum caractere especial
          </p>
        </div>

        <button className="butao-2" onClick={ onCancel }>Cancelar</button>
        <button
          className="butao-2"
          disabled={ isButtonDisabled() }
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Form;
