import React from 'react'
import styles from '../../pages/employee/styles'
import service from 'services/employeeService'
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
    service.saveNew(this.state).then(() => {
      this.props.history.push('/')
    })
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