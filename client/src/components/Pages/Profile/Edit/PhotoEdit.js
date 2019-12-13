import React, { Component } from "react";
import FilesService from "../../../../service/file.service";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

class PhotoEdit extends Component {
  constructor(props) {
    super(props);
    this.filesService = new FilesService();
    this.state = {
      disabledButton: false,
      buttonText: "Save Changes"
    };
  }
  handleFileUpload = e => {
    this.setState({ disabledButton: true, buttonText: "Uploading Image..." });
    const uploadData = new FormData();
    uploadData.append("imgPath", e.target.files[0]);
    this.filesService
      .handleUpload(uploadData)
      .then(response => {
        console.log("file uploaded ", response.data.secure_url);
        this.setState({
          disabledButton: false,
          buttonText: "Save Changes"
        });
        this.props.history.push("/profile");
      })
      
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Form encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            name="imgPath"
            type="file"
            onChange={this.handleFileUpload}
          />
        </Form.Group>

        <Button
          variant="outline-dark"
          type="submit"
          disabled={this.state.disabledButton}
        >
          {this.state.buttonText}
        </Button>
      </Form>
    );
  }
}
export default withRouter(PhotoEdit);
