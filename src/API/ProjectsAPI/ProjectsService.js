import { $host, $authHost } from "../config";

export class ProjectsService {
  static async getAll() {
    const response = await $host.get('projects/');

    return response.data;
  }

  static async create(projects) {
    const response = await $authHost.post('projects/create/', projects);

    return response.data;
  }

  static async delete(id) {
    const response = await $authHost.delete(`projects/${id}`);

    return response.data;
  }
}
