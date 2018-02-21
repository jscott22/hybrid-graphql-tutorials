// @flow
import axios from 'axios';
import { type UserType } from '../users/resolvers';

export type CompanyType = {
  id: string,
  name: string,
  description: string,
  users: UserType[]
};

type CompanyQueryType = {
  id: string
};

const company = async (parentValue: any, { id }: CompanyQueryType): Promise<CompanyType> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const users = async (parentValue: CompanyType): Promise<UserType[]> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/companies/${parentValue.id}/users`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default {
  Query: {
    company,
  },
  Company: {
    users,
  },
};
