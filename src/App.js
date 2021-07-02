import './App.css';
import { connect } from 'react-redux';
import { submitForm } from './redux/actions/submitForm';
import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import { resetForm } from './redux/actions/resetForm';

function App({submitForm, resetForm, formSubmit, personalForm, professionalForm}) {
  return (
    <div className="App">
      <h1> Redux Form </h1>
      <form>
        <PersonalForm />
        <ProfessionalForm />
        <button type="button" onClick={() => submitForm()}>Enviar</button>
        <button type="button" onClick={() => resetForm()}>Limpar</button>
      </form>
      {formSubmit ? 
        <div>
          <h1>Suas informações pessoais</h1>
          <p>Nome: {personalForm.name}</p>
          <p>Email: {personalForm.email}</p>
          <p>CPF: {personalForm.cpf}</p>
          <p>Endereço: {personalForm.address}</p>
          <p>Cidade: {personalForm.city}</p>
          <p>Estado: {personalForm.state}</p>
          <p>Tipo da casa: {personalForm.homeType}</p>

          <h1>Suas informações profissionais</h1>
          <p>Resumo: {professionalForm.resume}</p>
          <p>Cargo: {professionalForm.role}</p>
          <p>Descrição: {professionalForm.description}</p>
        </div> : 
        null
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  formSubmit: state.formHandler.submit,
  personalForm: state.formHandler.personalInfo,
  professionalForm: state.formHandler.professionalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => dispatch(submitForm()),
  resetForm: () => dispatch(resetForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
