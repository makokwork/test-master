import axios from 'axios';
export default class DocumentsService {
  static async getAll() {
    const response = await axios.get();
    return response.data;
  }
}
