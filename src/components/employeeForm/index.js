import React from 'react'
import styles from './styles'

export default class EmployeeForm extends React.Component {

  handleOnlyNumber(key, value) {
    if (!/^[0-9]*$/.test(value)) return

    this.props.handleChange(key, value)
  }

  render() {
    const {
      onSubmit,
      handleChange,
      name,
      lastname,
      email,
      nis
    } = this.props

    return (
      <form onSubmit={ () => onSubmit() }>
        <input type="text"
          required
          placeholder="Nome"
          value={ name }
          onChange={ e => handleChange('name', e.target.value) } />

        <input type="text"
          required
          placeholder="Sobrenome"
          value={ lastname }
          onChange={ e => handleChange('lastname', e.target.value) } />

        <input type="email"
          required
          placeholder="E-mail"
          value={ email }
          onChange={ e => handleChange('email', e.target.value) } />

        <input type="text"
          required
          placeholder="NIS(PIS)"
          value={ nis }
          onChange={ e => this.handleOnlyNumber('nis', e.target.value) } />

        <input type="submit" value="Salvar" />
      </form>
    )
  }
}