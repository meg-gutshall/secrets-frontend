const Form = props => {
  return (
    <div>
      <h2>What's Your Secret?</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="secretContent">Confess your secret here:</label><br/>
        <textarea
          id="secretContent"
          name="content"
          onChange={props.handleChange}
          value={props.formData.text}
        ></textarea><br/>
        <label htmlFor="secretTag">Choose a tag:</label><br/>
        <select
          name="tag"
          value={props.formData.tag}
          onChange={props.handleChange}
        >
          <option value="juicy">juicy</option>
          <option value="silly">silly</option>
          <option value="dirty">dirty</option>
          <option value="deep">deep</option>
        </select><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
