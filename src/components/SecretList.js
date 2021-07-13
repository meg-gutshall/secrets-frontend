import SecretListItem from './SecretListItem';

const SecretList = props => <>{ props.secrets && props.secrets.map(secret => <SecretListItem key={secret.id} secret={secret} />) }</>

export default SecretList;