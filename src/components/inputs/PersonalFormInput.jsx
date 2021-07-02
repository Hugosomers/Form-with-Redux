import React, { Component } from 'react'

export default class PersonalFormInput extends Component {
  render() {
    const { label, type, name, onChangeHandler, length, upperCase, value} = this.props;
    return (
      <div>
        <label>
          {label}
          <input 
            type={type}
            name={name}
            onChange={ onChangeHandler }
            maxLength={length}
            required
            style={{textTransform: upperCase}}
            value={value}
          />
        </label>
      </div>
    )
  }
}
