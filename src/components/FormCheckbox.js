const FormCheckbox = props =>
  <div className="secretTag">
    <div className={`tag ${props.name}`} key={props.id}>
      <input
        type="checkbox"
        key={props.id}
        id={`custom-checkbox-${props.id}`}
        name={props.name}
        checked={props.isChecked[props.id]}
        onCheck={props.handleCheck(props.id)}
      />
      <label htmlFor={`custom-checkbox-${props.id}`}>{props.name}</label>
    </div>
  </div>

export default FormCheckbox;