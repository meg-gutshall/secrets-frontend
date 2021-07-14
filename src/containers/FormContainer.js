import { Component } from 'react';
import { connect } from 'react-redux';
import { postSecret } from '../actions/allActions';
import Form from '../components/Form';
import FormCheckbox from '../components/FormCheckbox';

class FormContainer extends Component {
  availableTags = () => this.props.tags;

  createCheckbox = tag => {
    <FormCheckbox
      id={tag.id}
      name={tag.name}
      checked={this.state.tags[tag]}
      onChange={this.handleCheck}
    />
  }

  createCheckboxes = () => this.availableTags().map(this.createCheckbox);

  handleCheck = e => {
    const tagId = e.target.id;
    this.setState(previousState => ({
      tags: { ...previousState.tags, [tagId]: !previousState.tags[tagId] }
    }))
  }

  state = {
    content: '',
    tags: this.availableTags.reduce(
      (tags, tag) => ({ ...tags, [tag.id]: false }), {}
    )
  }

  handleContent = e => this.setState({ content: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const tags = this.state.tags.filter(tagId => this.state.tags[tagId])
    const newSecret = {
      content: this.state.content,
      tags: tags
    }
    this.props.postSecret(newSecret);
    this.setState({ content: '', tags: [] });
    // A nice todo --> Only clear the form if the POST is successful (handleSuccess callback method to pass to the reducer)
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <Form
          content={this.state.content}
          handleContent={this.handleContent}
          tags={this.props.tags}
          isChecked={this.isChecked}
          handleCheck={this.handleCheck}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags.byId
  }
}

export default connect(mapStateToProps, { postSecret })(FormContainer);