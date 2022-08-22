import axios from "axios";

const getSearchResults = async (input) => {
  const response = await axios({
    method: "post",
    url: `http://localhost:4000/esCustomerSearch.do?`,
    data: {
      customerName: input,
    },
  });

  return response.data;
};

export default getSearchResults;
