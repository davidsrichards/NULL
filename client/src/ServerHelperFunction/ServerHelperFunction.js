import axios from "axios";

const BASE_URL = "/api/admin";

////////////////////// admin login

export async function AdminLogins(credentials) {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/login`, credentials);

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

///////////////////////////////// register institution

export async function RegisterInstitutions(credentials) {
  try {
    const { data, status } = await axios.post(
      `${BASE_URL}/institution/new`,
      credentials
    );

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}
