import apiClient from './client';
import type { Link, CreateLinkRequest, UpdateLinkRequest } from '../types/link';
import type { PaginatedResponse } from '../types/api';

export const linksApi = {
  getLinks: async (): Promise<Link[]> => {
    const response = await apiClient.get<PaginatedResponse<Link>>('/links');
    return response.data.data;
  },

  createLink: async (data: CreateLinkRequest): Promise<{ data: Link }> => {
    const response = await apiClient.post<{ data: Link }>('/links', data);
    return response.data;
  },

  updateLink: async (id: number, data: UpdateLinkRequest): Promise<{ data: Link }> => {
    const response = await apiClient.put<{ data: Link }>(`/links/${id}`, data);
    return response.data;
  },

  deleteLink: async (id: number): Promise<void> => {
    await apiClient.delete(`/links/${id}`);
  },
};
