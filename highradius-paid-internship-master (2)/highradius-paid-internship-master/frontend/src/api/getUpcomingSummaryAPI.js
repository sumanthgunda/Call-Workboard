import axios from "axios";

const API_URL = "http://localhost:4000/getUpcomingSummary.do";

const getUpcomingSummary = async () => {
  const response = await axios.post(API_URL);
  return response.data;
};

export default getUpcomingSummary;
