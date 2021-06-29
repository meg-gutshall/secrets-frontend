const Form = props => {
  return (
    <div>
      <h2>What's Your Secret?</h2>
      <form onSubmit={props.handleSubmit}>
        <input 
          type="textarea"
          name="text"
          onChange={props.handleChange}
          value={props.formData.text}
        />
        <input 
          type="textarea"
          name="text"
          onChange={props.handleChange}
          value={props.formData.tag}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
