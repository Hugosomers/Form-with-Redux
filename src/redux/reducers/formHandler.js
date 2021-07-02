const INITIAL_STATE = {
  personalInfo: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    homeType: ''
  },
  professionalInfo: {
    resume: '',
    role: '',
    description: '',
  },
  submit: false,
}

function formHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'HANDLE_INPUT':
      return {
        ...state,
        [action.info]: {...state[action.info], [action.name]: action.value}
      }
    case 'SUBMIT_FORM':
      return {
        ...state,
        submit: true,
      }
    case 'RESET_FORM':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default formHandler;
