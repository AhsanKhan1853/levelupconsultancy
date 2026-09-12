import api from "./axios";

export const getOpportunities = (params = {}) =>
  api.get("opportunities/", { params }).then((res) => res.data);

export const getHotOpportunities = () =>
  api.get("opportunities/", { params: { is_hot: true } }).then((res) => res.data);