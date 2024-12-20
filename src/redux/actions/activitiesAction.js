// Action Types
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

// Importa il servizio API
import PostsAPI from "../../services/Posts";

// Action: Ottieni tutti i post
export const fetchPosts =
  (user = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    PostsAPI.allPosts(user)
      .then((posts) => {
        const filteredData = posts
          .slice(posts.length - 50, posts.length)
          .filter((item) => item.image);
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: filteredData.reverse(),
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POSTS_FAILURE,
          payload: error.message,
        });
        console.error("Errore nel recupero dei post:", error);
      });
  };
// Ottieni post di un solo profilo
export const fetchPostsProfile =
  (user = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    PostsAPI.allPostsProfile(user)
      .then((posts) => {
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: posts,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POSTS_FAILURE,
          payload: error.message,
        });
        console.error("Errore nel recupero dei post:", error);
      });
  };

// Action: Crea un nuovo post
export const createPost =
  (postData, user = "Francois") =>
  (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });

    PostsAPI.createPost(postData, user)
      .then((post) => {
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: post,
        });
        console.log("Post creato con successo:", post);
      })
      .catch((error) => {
        dispatch({
          type: CREATE_POST_FAILURE,
          payload: error.message,
        });
        console.error("Errore nella creazione del post:", error);
      });
  };

// Action: Aggiorna un post
export const updatePost =
  (postId, postData, user = "Francois") =>
  (dispatch) => {
    dispatch({ type: UPDATE_POST_REQUEST });

    PostsAPI.updatePost(postId, postData, user)
      .then((updatedPost) => {
        dispatch({
          type: UPDATE_POST_SUCCESS,
          payload: updatedPost,
        });
        console.log("Post aggiornato con successo:", updatedPost);
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_POST_FAILURE,
          payload: error.message,
        });
        console.error("Errore nell'aggiornamento del post:", error);
      });
  };

// Action: Elimina un post
export const deletePost =
  (postId, user = "Francois") =>
  (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });

    PostsAPI.deletePost(postId, user)
      .then(() => {
        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: postId,
        });
        console.log(`Post con ID ${postId} eliminato con successo.`);
      })
      .catch((error) => {
        dispatch({
          type: DELETE_POST_FAILURE,
          payload: error.message,
        });
        console.error("Errore nell'eliminazione del post:", error);
      });
  };
