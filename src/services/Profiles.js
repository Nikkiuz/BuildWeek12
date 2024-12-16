const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api";
const API_USER_PROFILE_ID = "/profile";
const API_ME_PROFILE = "/profile/me";

// Lista chiavi del team più forte

const Francois_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWU1ZDBlYTI4NjAwMTUyOGI5M2YiLCJpYXQiOjE3MzQzNDAxODksImV4cCI6MTczNTU0OTc4OX0.F0lG1ewGLskBKdNx05Q2uqDt-ZhuxKgR6M70igd-vs8";

const Tommaso_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWUyNDBlYTI4NjAwMTUyOGI5M2UiLCJpYXQiOjE3MzQzNDAxMzMsImV4cCI6MTczNTU0OTczM30.md8JPlmC0A2aU2EjfOWOWkJl_7-KZoYs1j2LwK-s3PA";

const Michele_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNlMDBlYTI4NjAwMTUyOGI5NDIiLCJpYXQiOjE3MzQzNDE2MDAsImV4cCI6MTczNTU1MTIwMH0.jO7oLFp7acRJwfd0NGcjFxxoldMKhHOUTM3GUTovd5c";

const Nicolò_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZTlkMTBlYTI4NjAwMTUyOGI5MmQiLCJpYXQiOjE3MzQzMzkwMjUsImV4cCI6MTczNTU0ODYyNX0.7j_kz0gCqcTL7QeIqsy2QNIbHryyCT-_C5Hr-PgKxBs";

const Omar_Key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWRlODBlYTI4NjAwMTUyOGI5M2MiLCJpYXQiOjE3MzQzNTg0MDUsImV4cCI6MTczNTU2ODAwNX0.vpfWJavN-m6v147xRxAIKfJGjPtysQ7_yfobcwjsEAQ";

// Ritorna la lista dei profili utente

const fetchALLProfile = () => {
  return fetch(`${API_ENDPOINT}${API_USER_PROFILE_ID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

// Ritorna il tuo profilo

const fetchMEProfile = () => {
  return fetch(`${API_ENDPOINT}${API_ME_PROFILE}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

// Ritorna un profilo specifico

const fetchUSERIDProfile = (userId) => {
  return fetch(`${API_ENDPOINT}${API_USER_PROFILE_ID}/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

// Aggiorna il profilo utente

const updateProfile = (userData) => {
  return fetch(`${API_ENDPOINT}${API_ME_PROFILE}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
    body: JSON.stringify(userData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

export default {
  fetchALLProfile,
  fetchMEProfile,
  fetchUSERIDProfile,
  updateProfile,
};
