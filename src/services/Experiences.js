const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api";
const userID = "675fee5d0ea286001528b93f";

const API_CALL = (endpoint, method = "GET", user, body = null) => {
  const API_KEYS = {
    Francois:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWU1ZDBlYTI4NjAwMTUyOGI5M2YiLCJpYXQiOjE3MzQzNDAxODksImV4cCI6MTczNTU0OTc4OX0.F0lG1ewGLskBKdNx05Q2uqDt-ZhuxKgR6M70igd-vs8",
    Tommaso:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWUyNDBlYTI4NjAwMTUyOGI5M2UiLCJpYXQiOjE3MzQzNDAxMzMsImV4cCI6MTczNTU0OTczM30.md8JPlmC0A2aU2EjfOWOWkJl_7-KZoYs1j2LwK-s3PA",
    Michele:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNlMDBlYTI4NjAwMTUyOGI5NDIiLCJpYXQiOjE3MzQzNDE2MDAsImV4cCI6MTczNTU1MTIwMH0.jO7oLFp7acRJwfd0NGcjFxxoldMKhHOUTM3GUTovd5c",
    Nicolò:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZTlkMTBlYTI4NjAwMTUyOGI5MmQiLCJpYXQiOjE3MzQzMzkwMjUsImV4cCI6MTczNTU0ODYyNX0.7j_kz0gCqcTL7QeIqsy2QNIbHryyCT-_C5Hr-PgKxBs",
    Omar: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWRlODBlYTI4NjAwMTUyOGI5M2MiLCJpYXQiOjE3MzQzNTg0MDUsImV4cCI6MTczNTU2ODAwNX0.vpfWJavN-m6v147xRxAIKfJGjPtysQ7_yfobcwjsEAQ",
  };

  if (!API_KEYS[user]) {
    throw new Error(`API Key per ${user} non trovata`);
  }

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${API_KEYS[user]}`,
  };

  return fetch(`${API_ENDPOINT}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((err) => {
        throw new Error(
          `Error: ${response.status} - ${err.message || "Unknown error"}`
        );
      });
    }
    return response.text().then((text) => {
      try {
        return text ? JSON.parse(text) : {};
      } catch {
        return text;
      }
    });
  });
};

// Endpoints aggiornati
const userExperiences = (user = "Francois") => {
  return API_CALL(`/profile/${userID}/experiences`, "GET", user);
};

const createUserExperiences = (userData, user = "Francois") => {
  return API_CALL(`/profile/${userID}/experiences`, "POST", user, userData);
};

const getSpecificExperience = (expID, user = "Francois") => {
  return API_CALL(`/profile/${userID}/experiences/${expID}`, "GET", user);
};

const updateSpecificExperience = (expID, userData, user = "Francois") => {
  return API_CALL(
    `/profile/${userID}/experiences/${expID}`,
    "PUT",
    user,
    userData
  );
};

const deleteUserExperience = (expID, user = "Francois") => {
  return API_CALL(`/profile/${userID}/experiences/${expID}`, "DELETE", user);
};

export default {
  userExperiences,
  createUserExperiences,
  getSpecificExperience,
  updateSpecificExperience,
  deleteUserExperience,
};
