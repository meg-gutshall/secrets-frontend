import SecretListItem from './SecretListItem';

const SecretList = props => {
  const secrets = Object.values(props.allSecrets);
  return <>{ secrets.map(secret => <SecretListItem key={secret.id} secret={secret} />) }</>
}

export default SecretList;