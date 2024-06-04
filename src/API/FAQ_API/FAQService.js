import { $authHost, $host } from "../config";

export class FAQService {
  static async getAll() {
    const response = await $host.get('faq/');

    return response.data;
  }

  static async create(question, answer) {
    const response = await $authHost.post('faq/create/', { question, answer });

    return response.data;
  }

  static async delete(id) {
    const response = await $authHost.delete(`faq/${id}/`);

    return response.data;
  }

  static async update(id, question, answer) {
    const response = await $authHost.patch(`faq/${id}/`, { question, answer });

    return response.data;
  }
}