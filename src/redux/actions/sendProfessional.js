export const sendProfessional = ({ target }) => {
  const {name, value} = target;
  return {
    type: 'HANDLE_INPUT',
    info: 'professionalInfo',
    name,
    value,
  }
}