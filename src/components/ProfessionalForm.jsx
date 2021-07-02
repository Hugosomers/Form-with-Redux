import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendProfessional } from '../redux/actions/sendProfessional';

export class ProfessionalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passed: false,
    }

    this.onMouse = this.onMouse.bind(this);
  }

  onMouse() {
    alert('Preencha com cuidado essa informação');
    this.setState({
      passed: true,
    })
  }
  render() {
    const { sendProfessionalToAction, professionalForm } = this.props;
    const {passed} = this.state;
    return (
      <div>
        <fieldset>
          <legend>Descrição de cargo</legend>

          <label>
            Resumo:
            <textarea
              name="resume"
              maxLength="1000"
              onChange={sendProfessionalToAction}
              value={professionalForm.resume}
              required
            />
          </label>

          <label>
            Cargo:
            <textarea               
              name="role"
              maxLength="40"
              onChange={sendProfessionalToAction}
              value={professionalForm.role}
              onMouseEnter= {!passed ? this.onMouse : null}
              required
            />
          </label>

          <label>
            Descrição do cargo:
            <textarea               
              name="description"
              maxLength="500"
              onChange={sendProfessionalToAction}
              value={professionalForm.description}
              required
            />
          </label>

        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  professionalForm: state.formHandler.professionalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  sendProfessionalToAction: (event) => dispatch(sendProfessional(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm)
