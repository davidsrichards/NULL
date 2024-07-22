import axios from "axios";

export const FunctionToGet = async (url, credentials) => {
  const response = await axios.get(url, credentials).catch((err) => {
    if (err) return err.response;
  });
  if (response) {
    return response;
  }
};

// post

export const FunctionToPost = async (url, result) => {
  const response = await axios
    .post(url, result, { withCredentials: true })
    .catch((err) => {
      if (err) return err.response;
    });
  return response.data;
};

export const FuncionToDelete = async (url) => {
  const response = await axios.delete(url).catch((err) => {
    if (err) {
      return err.response;
    }
  });
  if (response) {
    return response;
  }
};

// update

export const FuncionToUpdate = async (url, info) => {
  const response = axios.put(url, info).catch((err) => {
    if (err) return err.response;
  });
  if (response) {
    return response;
  }
};
