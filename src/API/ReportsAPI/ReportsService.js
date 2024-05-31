import { $authHost, $host } from "../config";

export class ReportsService {
  static async getAllGroups() {
    const response = await $host.get('groups/');

    return response.data;
  }

  static async getAllGroupReports(idGroup) {
    const response = await $host.get(`groups/reports-in-group/${idGroup}/`);

    return response.data;
  }

  static async createGroup(name) {
    const response = await $authHost.post('groups/create/', { name });

    return response.data;
  }

  static async deleteGroup(id) {
    const response = await $authHost.delete(`groups/${id}/`);

    return response.data;
  }

  static async changeNameGroup(id, name) {
    const response = await $authHost.patch(`groups/${id}/`, { name });

    return response.data;
  }

  static async createReportItem(reportFormData) {
    const response = await $authHost.post('reports/create/', reportFormData);

    return response.data;
  }

  static async deleteReportItem(id) {
    const response = await $authHost.delete(`reports/${id}/`);

    return response.data;
  }

  static async changeNameReportItem(id, name) {
    const response = await $authHost.patch(`reports/${id}/`, { name });

    return response.data;
  }
}