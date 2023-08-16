import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form, { ValueProps } from './components/Form';

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [servicos, setServicos] = useState<ValueProps[]>([]);
  const [esconderSenhas, setEsconderSenhas] = useState(false);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCancelarFormulario = () => {
    setMostrarFormulario(false);
  };

  const cadastrarServico = (servico: ValueProps) => {
    setServicos([...servicos, servico]);
    setMostrarFormulario(false);
  };

  const removerServico = (index: number) => {
    const updatedServicos = [...servicos];
    updatedServicos.splice(index, 1);
    setServicos(updatedServicos);
  };

  const toggleEsconderSenhas = () => {
    setEsconderSenhas(!esconderSenhas);
  };

  const renderizarSenha = (senha: string) => {
    return esconderSenhas ? '******' : senha;
  };

  return (
    <div className="tudo">
      <Header />
      <div className="form">
        {mostrarFormulario ? (
          <Form onCancel={ handleCancelarFormulario } onRegister={ cadastrarServico } />
        ) : (
          <div>
            {!mostrarFormulario && (
              <button
                className="cadastro-button"
                onClick={ handleMostrarFormulario }
              >
                Create New Password
              </button>
            )}
            <div className="div-flex">
              {servicos.length === 0 ? (
                <p />
              ) : (
                servicos.map((servico, index) => (
                  <div className="grid" key={ index }>
                    <a className="servico" href={ servico.url }>{servico.nomeServico}</a>
                    <p className="servico">{ servico.login }</p>
                    <p className="servico">{ renderizarSenha(servico.senha) }</p>
                    <button
                      className="button-3"
                      onClick={ () => removerServico(index) }
                      data-testid="remove-btn"
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
