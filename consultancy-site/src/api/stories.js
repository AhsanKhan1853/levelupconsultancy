import api from "./axios";

export const getStories = (params = {}) =>
  api.get("stories/", { params }).then((res) => res.data);

export const getHotStories = () =>
  api.get("stories/", { params: { is_hot: true } }).then((res) => res.data);