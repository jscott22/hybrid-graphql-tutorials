import axios from "axios";

const company = async (parentValue, { id }) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
    return data;
  } catch (e) {
    console.warn("Something went wrong");
  }
};

export default {
  Query: {
    company
  }
};
