import FormContainer from "../containers/FormContainer";
import SecretContainer from "../containers/SecretContainer";
import Filter from "./Filter";

const NewSecret = () => (
  <div>
    <h1>Secrets</h1>
    <FormContainer />
    <Filter />
    <SecretContainer />
  </div>
);

export default NewSecret;