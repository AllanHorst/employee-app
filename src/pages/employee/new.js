import React from 'react'
import styles from '../../pages/employee/styles'
import EmployeeForm from '../../components/employeeForm';

export default class New extends React.Component {

  state = {
    name: '',
    lastname: '',
    email: '',
    nis: ''
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  onSubmit() {
    console.log(this.state)
  }

  render() {
    return (
      <EmployeeForm
        onSubmit={ () => this.onSubmit()}
        handleChange={ (key, value) => this.handleChange(key, value) }
        { ...this.state } />
    )
  }
}