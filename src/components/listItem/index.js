import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

export default props => (
  <li style={ styles.listItem }>
    <Link to={`/edit/${props.id}`}>
      { `${props.name} ${ props.lastname }` }
    </Link>
    <span>
      { props.email }
    </span>
    <span>
      { props.nis }
    </span>
    <button onClick={ () => props.deleteItem(props.id) }>
      Exluir
    </button>
  </li>
)