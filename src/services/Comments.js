const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/comments/";

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

// Funzione per selezionare dinamicamente la chiave
const getApiKey = (name) => {
  if (!API_KEYS[name]) {
    throw new Error(`API Key "${name}" not found`);
  }
  return API_KEYS[name];
};

// Funzione generica per le chiamate API
const fetchAPI = (endpointSpecifico, method = "GET", keyName, body = null) => {
  const apiKey = getApiKey(keyName);

  return fetch(`${API_ENDPOINT}${endpointSpecifico}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: body ? JSON.stringify(body) : null,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

// Funzioni API specifiche per i commenti
const getAllComments = (keyName = "Francois") => {
  return fetchAPI("", "GET", keyName);
};

const createComment = (commentData, keyName = "Francois") => {
  return fetchAPI("", "POST", keyName, commentData);
};

const updateComment = (commentId, updatedData, keyName = "Francois") => {
  return fetchAPI(`${commentId}`, "PUT", keyName, updatedData);
};

const deleteComment = (commentId, keyName = "Francois") => {
  return fetchAPI(`${commentId}`, "DELETE", keyName);
};

// Esportiamo le funzioni
export default {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};
