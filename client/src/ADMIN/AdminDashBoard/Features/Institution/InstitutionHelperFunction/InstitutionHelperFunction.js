import axios from "axios";

const BASE_URL = "/api/admin";

/// find institution by code

export async function findInstitution() {
  try {
    const { data } = await axios.get(`${BASE_URL}/institution/get/all`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/// find user

export async function getAllUsers() {
  try {
    const { data } = await axios.get(`${BASE_URL}/user/all`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

// get user

export async function getUserDetails({ code, userId }) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/institution/code`,

      { params: { code, userId } }
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
