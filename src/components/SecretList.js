import SecretListItem from './SecretListItem';

const SecretList = props => {
  return <>{ props.secrets && props.secrets.map(secret => <SecretListItem key={secret.id} secret={secret} />) }</>
}

export default SecretList;