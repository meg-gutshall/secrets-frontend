const spanStyle = {
  paddingLeft: '30px',
  fontWeight: 'bold'
}

const SecretListItem = props => <p>{props.secret.content} <span style={spanStyle}>{props.secret.tag}</span></p>

export default SecretListItem;