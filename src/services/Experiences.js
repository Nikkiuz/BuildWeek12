const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api";
const API_USER_EXPERINCES = "/experiences";

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

  
// Ritorna una lista di experiences

const userExperiences = (userID) => {
  return fetch(`${API_ENDPOINT}/${userID}${API_USER_EXPERINCES}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }
    return response.json();
  });
};

// Crea una nuova experience. NOTA: ogni utente ha il permesso di creare/modificare solo le proprie esperienze

const createUserExperiences = (userID, userData) => {
  return fetch(`${API_ENDPOINT}/${userID}${API_USER_EXPERINCES}`, {
    method: "POST",
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

// Ritorna una specifica experience

const ritornaSpecificaExperiences = (userID, expID) => {
  return fetch(`${API_ENDPOINT}/${userID}${API_USER_EXPERINCES}/${expID}`, {
    method: "GET",
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

// Modifica una specifica experience

const modificaSpecificaExperiences = (userID, expID) => {
  return fetch(`${API_ENDPOINT}/${userID}${API_USER_EXPERINCES}/${expID}`, {
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

// Elimina una specifica experience

const deleteUserExperience = (userId, expId) => {
  return fetch(`${API_ENDPOINT}/profile/${userId}/experiences/${expId}`, {
    method: "DELETE",
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

export default {
  userExperiences,
  createUserExperiences,
  ritornaSpecificaExperiences,
  modificaSpecificaExperiences,
  deleteUserExperience,
};
