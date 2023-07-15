import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchAnswers = async () => {
  const res = await axios.get(`/fortune-telling`);
  return res.data;
};
