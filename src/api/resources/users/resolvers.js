// @flow
import axios from 'axios';
import { type CompanyType } from '../companies/resolvers';

type UserType = {
  id: string,
  firstName: string,
  age: number
};

type UserQueryType = {
  id: string
};

type UserCompanyResolverType = {
  companyId: string
};

const user = async (parentValue: any, { id }: UserQueryType): Promise<{ data: UserType }> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    return data;
  } catch (e) {
    console.warn('Something went wrong');
    return e;
  }
};

const company = async ({ companyId }: UserCompanyResolverType): Promise<{ data: CompanyType }> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/companies/${companyId}`);
    return data;
  } catch (e) {
    console.warn('Something went wrong');
    return e;
  }
};

export default {
  Query: {
    user,
  },
  User: {
    company,
  },
};
