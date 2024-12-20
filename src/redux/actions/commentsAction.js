// Action Types
export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";

export const UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST";
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";

export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

// Importa il servizio API
import CommentsAPI from "../../services/Comments";

// Action: Ottieni tutti i commenti
export const fetchComments =
  (keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });

    CommentsAPI.getAllComments(keyName)
      .then((comments) => {
        console.log("Commenti : ", comments);
        dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: comments,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COMMENTS_FAILURE,
          payload: error.message,
        });
        console.error("Errore nel recupero dei commenti:", error);
      });
  };

// Action: Crea un nuovo commento
export const createComment =
  (commentData, keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: CREATE_COMMENT_REQUEST });

    CommentsAPI.createComment(commentData, keyName)
      .then((comment) => {
        dispatch({
          type: CREATE_COMMENT_SUCCESS,
          payload: comment,
        });
        console.log("Commento creato con successo:", comment);
      })
      .catch((error) => {
        dispatch({
          type: CREATE_COMMENT_FAILURE,
          payload: error.message,
        });
        console.error("Errore nella creazione del commento:", error);
      });
  };

// Action: Aggiorna un commento
export const updateComment =
  (commentId, updatedData, keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: UPDATE_COMMENT_REQUEST });

    CommentsAPI.updateComment(commentId, updatedData, keyName)
      .then((updatedComment) => {
        dispatch({
          type: UPDATE_COMMENT_SUCCESS,
          payload: updatedComment,
        });
        console.log("Commento aggiornato con successo:", updatedComment);
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_COMMENT_FAILURE,
          payload: error.message,
        });
        console.error("Errore nell'aggiornamento del commento:", error);
      });
  };

// Action: Elimina un commento
export const deleteComment =
  (commentId, keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: DELETE_COMMENT_REQUEST });

    CommentsAPI.deleteComment(commentId, keyName)
      .then(() => {
        dispatch({
          type: DELETE_COMMENT_SUCCESS,
          payload: commentId,
        });
        console.log(`Commento con ID ${commentId} eliminato con successo.`);
      })
      .catch((error) => {
        dispatch({
          type: DELETE_COMMENT_FAILURE,
          payload: error.message,
        });
        console.error("Errore nell'eliminazione del commento:", error);
      });
  };
