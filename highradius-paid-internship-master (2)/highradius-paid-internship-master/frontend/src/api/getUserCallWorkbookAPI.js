import axios from "axios";

const getUserCallWorkbookData = async (pageNum) => {
  const API_URL = `http://localhost:4000/getUserCallWorkbook.do?pageNumber=${pageNum}&pageSize=5`;
  const response = await axios.post(API_URL);
  //   console.log(response.data);
  return response.data;
};

export default getUserCallWorkbookData;
