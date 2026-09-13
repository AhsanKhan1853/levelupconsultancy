import api from "./axios";

export const submitFeedback = (data) => api.post("feedback/", data).then((res) => res.data);