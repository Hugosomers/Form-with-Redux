import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPersonal } from '../redux/actions/sendPersonal';
import PersonalFormInput from './inputs/PersonalFormInput';

export class PersonalForm extends Component {
  render() {
    const { sendPersonalToAction, personalForm } = this.props;
    const states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    return (
      <div>
        <fieldset>
          <legend>Informações pessoais</legend>
          <PersonalFormInput 
            label="Nome:" 
            type="text" 
            name="name" 
            value={personalForm.name}
            onChangeHandler={sendPersonalToAction} 
            length="40"
            upperCase="uppercase"
          />

          <PersonalFormInput 
            label="Email:" 
            type="text" 
            name="email" 
            value={personalForm.email}
            onChangeHandler={sendPersonalToAction} 
            length="50"
          />

          <PersonalFormInput 
            label="CPF:" 
            type="text" 
            name="cpf" 
            value={personalForm.cpf}
            onChangeHandler={sendPersonalToAction} 
            length="11"
          />

          <PersonalFormInput 
            label="Endereço:" 
            type="text" 
            name="address" 
            onChangeHandler={sendPersonalToAction}
            length="200"
            value={personalForm.address}
          />

          <PersonalFormInput 
            label="Cidade:" 
            type="text" 
            name="city" 
            onChangeHandler={sendPersonalToAction} 
            length="28"
            value={personalForm.city}
          />
        </fieldset>

        <fieldset>

          <select name="state" onChange={ sendPersonalToAction }>
            <option>Selecione seu estado</option>
            {states.map((item, index) => <option value={item} key={index}>{item}</option>)}
          </select>

          <label>
            Casa: <input type="radio" value="casa" name="homeType" onChange={sendPersonalToAction}/>
          </label>

          <label>
            Apartamento: <input type="radio" value="apartamento" name="homeType" onChange={sendPersonalToAction}/>
          </label>
        </fieldset>

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  personalForm: state.formHandler.personalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  sendPersonalToAction: (event) => dispatch(sendPersonal(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm)
