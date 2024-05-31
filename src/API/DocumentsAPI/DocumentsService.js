import { $authHost, $host } from "../config";

export class DocumentsService {
  static async getAll() {
    const response = await $host.get('docs/');

    return response.data;
  }

  static async create(document) {
    const response = await $authHost.post('docs/create/', document);

    return response.data;
  }

  static async delete(id) {
    const response = await $authHost.delete(`docs/${id}`);

    return response.data;
  }
}
