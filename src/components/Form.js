import FormCheckbox from "./FormCheckbox"

const Form = props => {
  return (
    <div>
      <h2>What's Your Secret?</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="secretContent">Spill your secret here</label><br/>
        <textarea
          required
          id="secretContent"
          name="content"
          onChange={props.handleContent}
          value={props.content || ''}
        ></textarea><br/>
        <label htmlFor="secretTag">Choose a tag</label><br/>
        <FormCheckbox /><br/>
        <button type="submit">Confess</button><br/>
      </form>
    </div>
  )
}

export default Form
