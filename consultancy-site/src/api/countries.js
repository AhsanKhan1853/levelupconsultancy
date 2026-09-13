import api from "./axios";

export const getCountries = (params = {}) =>
  api.get("countries/", { params }).then((res) => res.data);
