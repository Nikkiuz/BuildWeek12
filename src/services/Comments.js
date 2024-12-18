const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api/comments/";

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

// Ottieni tutti i commenti
const getAllComments = () => {
  return fetch(`${API_ENDPOINT}`, {
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

// Crea un nuovo commento
const createComment = (commentData) => {
  return fetch(`${API_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
    body: JSON.stringify(commentData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

// Modifica uno commento
const updateComment = (updatedData) => {
  return fetch(`${API_ENDPOINT}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Francois_Key}`,
    },
    body: JSON.stringify(updatedData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
};

// Cancella uno commento
const deleteComment = () => {
  return fetch(`${API_ENDPOINT}`, {
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
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};

// CHIEDERE SE I COMMENTI VALGONO PER OGNI POST O HANNO UN ID