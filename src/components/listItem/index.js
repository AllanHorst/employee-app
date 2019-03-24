import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles'

export default props => (
  <li style={ styles.listItem }>
    <Link style={ styles.listContentLink} to={`/edit/${props.id}`}>
      { `${props.name} ${ props.lastname }` }
    </Link>
    <span style={ styles.listContent}>
      { props.email }
    </span>
    <span style={ styles.listContent}>
      { props.nis }
    </span>
    <button onClick={ () => props.deleteItem(props.id) }>
      Exluir
    </button>
  </li>
)