// @flow
import axios from 'axios';
import { type CompanyType } from '../companies/resolvers';

export type UserType = {
  id: string,
  firstName: string,
  age: number,
  companyId?: string
};

type UserQueryType = {
  id: string
};

type AddUserArgsType = {
  firstName: string,
  age: number,
  companyId?: string
};

const user = async (parentValue: any, { id }: UserQueryType): Promise<UserType> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const company = async ({ companyId }: UserType): Promise<CompanyType | null> => {
  if (!companyId) {
    return null;
  }

  try {
    const { data } = await axios.get(`http://localhost:3000/companies/${companyId}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const addUser = async (
  parentValue: any,
  { firstName, age }: AddUserArgsType,
): Promise<UserType> => {
  try {
    const { data } = await axios.post('http://localhost:3000/users', { firstName, age });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const updateUser = async (parentValue: any, updatedUser: UserType): Promise<UserType> => {
  try {
    const { data } = await axios.patch(
      `http://localhost:3000/users/${updatedUser.id}`,
      updatedUser,
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUser = async (parentValue: any, { userId }: { userId: string }): Promise<null> => {
  try {
    return await axios.delete(`http://localhost:3000/users/${userId}`);
  } catch (e) {
    throw new Error(e);
  }
};

export default {
  Query: {
    user,
  },
  Mutation: {
    addUser,
    deleteUser,
    updateUser,
  },
  User: {
    company,
  },
};
