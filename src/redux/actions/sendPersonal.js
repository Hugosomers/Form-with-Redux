export const sendPersonal = ({ target }) => {
  const {name, value} = target;
  return {
    type: 'HANDLE_INPUT',
    info: 'personalInfo',
    name,
    value,
  }
}
