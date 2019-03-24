import React from 'react'
import styles from './styles'
import { Link} from 'react-router-dom'

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
      <form style={ styles.form  } onSubmit={ () => onSubmit() }>
        <input type="text"
          required
          style={ styles.input }
          placeholder="Nome"
          value={ name }
          onChange={ e => handleChange('name', e.target.value) } />

        <input type="text"
          required
          style={ styles.input }
          placeholder="Sobrenome"
          value={ lastname }
          onChange={ e => handleChange('lastname', e.target.value) } />

        <input type="email"
          required
          style={ styles.input }
          placeholder="E-mail"
          value={ email }
          onChange={ e => handleChange('email', e.target.value) } />

        <input type="text"
          required
          style={ styles.input }
          placeholder="NIS(PIS)"
          value={ nis }
          onChange={ e => this.handleOnlyNumber('nis', e.target.value) } />

        <input style={ styles.inputSubmit } type="submit" value="Salvar" />
        <Link style={ styles.returnButton } to="/">
          Voltar
        </Link>
      </form>
    )
  }
}