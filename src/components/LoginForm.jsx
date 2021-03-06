import React from 'react'
import {Link} from 'react-router'
import {Card, CardTitle, CardText, RaisedButton, TextField} from 'material-ui'


class LoginForm extends React.Component {

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault()

    console.log("email:", this.refs.email.getValue())
    console.log("password:", this.refs.password.getValue())
  }

  render() {
    return (
      <Card className="container">
        <form action="/" onSubmit={this.processForm.bind(this)}>
          <h2 className="card-heading">Log In</h2>

          <CardTitle title="Login with Email" />

          <div className="field-line">
            <TextField ref="email" floatingLabelText="Email" />
          </div>

          <div className="field-line">
            <TextField ref="password" floatingLabelText="Password" type="password" />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Login" primary={true} />
          </div>

          <CardText>Don't have an account? <Link to={`/signup`}>Create one</Link></CardText>
        </form>
      </Card>
    )
  }

}

export default LoginForm
