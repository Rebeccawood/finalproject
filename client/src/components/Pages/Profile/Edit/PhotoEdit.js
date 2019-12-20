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
      buttonText: "Save Changes",
      // imgPath: this.props.loggedInUser.imgPath
      
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
          buttonText: "Save Changes",
          // imgPath: response.data.secure_url
          
        });
        this.props.history.push("/profile");
      })
      
      .catch(err => console.log(err));
  }

  // handleUpload =()=> {
  //   this.filesService.editPhoto(this.state.imgPath)
  //     .then(user => this.props.setUser(user.data))
  //     this.props.closeModalWindow();
  //   this.props.history.push("/profile");
  // }
  render() {
    return (
      <Form encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            name="imgPath"
            id="input1"
            type="file"
            onChange={this.handleFileUpload}
            // value={this.state.imgPath}
          />
        </Form.Group>

        <Button
          variant="outline-dark"
          type="submit"
          disabled={this.state.disabledButton}
          // onClick={this.handleUpload}
        >
          {this.state.buttonText}
        </Button>
      </Form>
    );
  }
}
export default withRouter(PhotoEdit);
