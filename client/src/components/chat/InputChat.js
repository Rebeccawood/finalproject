import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

class InputChat extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handlerText = e => {
    this.setState({ ...this.state, text: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.info(this.state.text);
    this.setState({ ...this.state, text: "" });
  };

  
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onChange={e => {
              this.handlerText(e);
            }}
            type="text"
            placeholder="Your message"
            value={this.state.text}
          />
        </Form.Group>

        <Button
          variant="dark-outline"
          type="submit"
          onClick={e => {
            this.handlerSubmit(e);
          }}
        >
          Send
        </Button>
      </Form>
    );
  }
}
export default InputChat