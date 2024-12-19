const API_ENDPOINT = "https://striveschool-api.herokuapp.com/api";
const API_POST = "/posts";

// Chiavi utente
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

const USER_KEYS = {
  Francois: "zPhoenix",
  Tommaso: "tommaso.panciroli",
  Michele: "Mich3le",
  Nicolò: "nikkiuz",
  Omar: "prova",
};

// Recupera la chiave API per un utente specifico
const getApiKey = (user) => {
  if (!API_KEYS[user]) {
    throw new Error(`API Key per ${user} non trovata`);
  }
  return API_KEYS[user];
};

// Funzione generica per le chiamate API
const apiCall = (endpoint, method = "GET", user = "Francois", body = null) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getApiKey(user)}`,
  };

  return fetch(`${API_ENDPOINT}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Errore: ${response.status} ${response.statusText}`);
    }
    return response.json();
  });
};

// API specifiche
const allPosts = (user = "Francois") =>
  apiCall(API_POST, "GET", user)
    .then((data) => data)
    .catch((err) => {
      throw err;
    });

const allPostsProfile = (user = "Francois") =>
  apiCall(API_POST, "GET", user)
    .then((data) => {
      const dataFinal = [];
      data.forEach((element) => {
        if (element.user.username === USER_KEYS[user]) {
          dataFinal.push(element);
        }
      });
      return dataFinal;
    })
    .catch((err) => {
      throw err;
    });

const createPost = (postData, user = "Francois") =>
  apiCall(API_POST, "POST", user, postData)
    .then((data) => data)
    .catch((err) => {
      throw err;
    });

const getPostById = (postId, user = "Francois") =>
  apiCall(`${API_POST}/${postId}`, "GET", user)
    .then((data) => data)
    .catch((err) => {
      throw err;
    });

const updatePost = (postId, postData, user = "Francois") =>
  apiCall(`${API_POST}/${postId}`, "PUT", user, postData)
    .then((data) => data)
    .catch((err) => {
      throw err;
    });

const deletePost = (postId, user = "Francois") =>
  apiCall(`${API_POST}/${postId}`, "DELETE", user)
    .then((data) => data)
    .catch((err) => {
      throw err;
    });

// Esportazione delle funzioni
export default {
  allPosts,
  allPostsProfile,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};
