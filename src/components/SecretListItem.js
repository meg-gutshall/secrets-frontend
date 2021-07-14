const spanStyleTags = {
  paddingLeft: '3rem',
  fontWeight: 'bold'
}
const spanStyleTag = {
  paddingRight: '1rem'
}

const SecretListItem = props => {
  const tags = props.secret.tags.map(tag => <span key={tag.id} style={spanStyleTag}>{tag.name}</span>)
  return <p>{props.secret.content} <span style={spanStyleTags}>{tags}</span></p>
}

export default SecretListItem;