import { $authHost, $host } from "../config";

export class PostService {
  static async getAll(category) {
    let response;

    if (category) {
      response = await $host.get(`posts/${category}/`);
    } else {
      response = await $host.get('posts/$');
    }

    return response.data;
  }

  static async getById(id) {
    const response = await $host.get(`posts/${id}`);

    return response.data;
  }

  static async create(postData) {
    const response = await $authHost.post('posts/create/', postData);

    return response.data;
  }

  static async delete(id) {
    const response = await $authHost.delete(`posts/${id}`);

    return response.data;
  }

  // TODO
  // static async addFile(dataFile) {
  //   const response = await $authHost.post(``);
  // }
}