import { $authHost } from "../config";

export class FormService {
  static async create(dataForm) {
    const response = await $authHost.post('forms/create/', dataForm);

    return response.data;
  }
}