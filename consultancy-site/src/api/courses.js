import api from "./axios";

export const getCourses = (params = {}) =>
  api.get("courses/", { params }).then((res) => res.data);
