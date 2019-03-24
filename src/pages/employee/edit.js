import React from 'react'
import styles from './styles'
import EmployeeForm from 'components/employeeForm'
import service from 'services/employeeService'

export default class Edit extends React.Component {

  state = {
    name: '',
    lastname: '',
    email: '',
    nis: ''
  }

  componentWillMount() {
    service.getList().then(data => {
      this.setState({ ...data })
    })
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