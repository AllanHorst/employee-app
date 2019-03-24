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
    const { id } = this.props.match.params
    service.findById(id).then(data => {
      this.setState({ ...data })
    })
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  onSubmit() {
    service.update(this.state).then(() => {
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