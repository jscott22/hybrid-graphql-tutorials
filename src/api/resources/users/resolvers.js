import axios from "axios";

const user = async (parentValue, { id }) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    return data;
  } catch (e) {
    console.warn("Something went wrong");
  }
};

const company = async ({ companyId }, args) => {
  console.log("COMPANY ID", companyId);
  try {
    const { data } = await axios.get(
      `http://localhost:3000/companies/${companyId}`
    );
    return data;
  } catch (e) {
    console.warn("Something went wrong");
  }
};

export default {
  Query: {
    user
  },
  User: {
    company
  }
};
