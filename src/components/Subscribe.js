import React, { Component } from 'react';

class Subscribe extends Component {
  state = { 
    mail: '',
    status: false
  }

  saveMail = (mail) => {
    const URL = 'http://localhost:3004/subcriptions';
    fetch(URL,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({mail})
    }).then(res => res.json())
      .then(() => {
        this.setState({
          mail: ''
        })
      })

    console.log(mail);
    this.setState({
      status: 'Thank you for subscribing to us!'
    })
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    const mail = this.state.mail;
    const regex = /\S+@\S+\.\S+/;
    regex.test(mail) ? this.saveMail(mail) : this.setState({ status: 'Please enter valid email adress' });
  }

  inputChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({
      mail: value
    })
  }
 
  render() {
    return (
      <div className="form">
        <h3>Subscribe to us</h3>
        <form onSubmit={this.submitFormHandler}>
          <input type="text" 
                 placeholder='example@gmail.com'
                 onChange={this.inputChangeHandler}
                 value={this.state.mail}
                 /><br/>
          {!!this.state.status && <p>{this.state.status}</p>}
          <button id="button1">SUBSCRIBE</button><br/>
          <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
        </form>
      </div>
    );
  }
}

export default Subscribe;