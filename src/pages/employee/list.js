import React from 'react'
import service from 'services/employeeService'
import styles from './styles'
import ListItem from '../../components/listItem';
import { Link } from 'react-router-dom'

export default class List extends React.Component {

  state = {
    employees: []
  }

  deleteItem(id) {
    service.remove(id).then(() => this.loadEmployees())
  }

  componentDidMount() {
    this.loadEmployees()
  }

  loadEmployees() {
    service.getList().them(res => {
      this.setState({ employees: res.data})
    })
  }

  render() {
    const { employees } = this.state
    return (
      <div>
        <h1 style={ styles.title }>Empregados</h1>
        <ul style={ styles.list }>
          {
            employees.map((employee, index) => (
              <ListItem
                deleteItem={ id => this.deleteItem(id) }
                { ...employee }
                key={ index }/>
            ))
          }
        </ul>

        <Link to="/new" style={ styles.newButton }>
        Cadastrar
        </Link>
      </div>
    )
  }
}