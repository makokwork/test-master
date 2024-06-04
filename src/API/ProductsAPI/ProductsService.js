import { $authHost, $host } from "../config";

export class ProductService {
  static async getAll() {
    const response = await $host.get('products/');

    return response.data;
  }

  static async create(product) {
    const response = await $authHost.post('products/create/', product);

    return response.data;
  }

  static async delete(id) {
    const response = await $authHost.delete(`products/${id}`);

    return response.data;
  }

  static async update(id, name, price) {
    const response = await $authHost.patch(`products/${id}/`, { name, price });

    return response.data;
  }
}