// @flow
import axios from 'axios';

export type CompanyType = {
  id: string,
  name: string,
  description: string
};

type CompanyQueryType = {
  id: string
};

const company = async (
  parentValue: any,
  { id }: CompanyQueryType,
): Promise<{ data: CompanyType }> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
    return data;
  } catch (e) {
    return e;
  }
};

export default {
  Query: {
    company,
  },
};
