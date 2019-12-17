import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
          baseURL: "https://speakeasy-ironhack.herokuapp.com/api/files",
          withCredentials: true
        });
    }

    handleUpload = theFile => this.service.post('/upload', theFile) }