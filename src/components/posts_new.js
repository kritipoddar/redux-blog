import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component{
  render(){
    return(
      <div>
      <h2>Add a Post!</h2>
      <form>
        <Field
          name="title"
          component={}
        />
      </form>
      </div>
    );
  }
}

export default reduxForm ({
  form: 'PostsNewForm'
})(PostsNew);
