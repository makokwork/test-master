import { authHost, host } from '..';

export default class ProjectsService {
  static async getAll() {
    const response = await host.get('projects/');

    return response.data;
  }

  static async create(projects) {
    const response = await authHost.post('projects/create/', project);

    return response.data;
  }

  static async delete(id) {
    const response = await authHost.delete(`projects/${id}`);

    return response.data;
  }
}
