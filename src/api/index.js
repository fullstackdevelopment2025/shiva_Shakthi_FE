import api from "./axios";

export const authApi = {
  register: (payload) => api.post("/auth/register", payload),
  login: (payload) => api.post("/auth/login", payload)
};

export const userApi = {
  me: () => api.get("/users/me"),
  list: () => api.get("/users"),
  getById: (id) => api.get(`/users/${id}`),
  update: (id, payload) => api.put(`/users/${id}`, payload),
  remove: (id) => api.delete(`/users/${id}`),
  promote: (id) => api.patch(`/users/${id}/promote`)
};

export const appointmentApi = {
  create: (payload) => api.post("/create/appointments", payload),
  list: () => api.get("/create/appointments")
};

export default api;
