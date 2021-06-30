import FormContainer from "../containers/FormContainer";
import SecretContainer from "../containers/SecretContainer";

const NewSecret = () => {
  return (
    <div>
      <h1>Secrets</h1>
      <FormContainer />
      <SecretContainer />
    </div>
  )
}

export default NewSecret;