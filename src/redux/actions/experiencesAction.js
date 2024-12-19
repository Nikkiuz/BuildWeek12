// Action Types
export const FETCH_EXPERIENCES_REQUEST = "FETCH_EXPERIENCES_REQUEST";
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS";
export const FETCH_EXPERIENCES_FAILURE = "FETCH_EXPERIENCES_FAILURE";

export const CREATE_EXPERIENCE_REQUEST = "CREATE_EXPERIENCE_REQUEST";
export const CREATE_EXPERIENCE_SUCCESS = "CREATE_EXPERIENCE_SUCCESS";
export const CREATE_EXPERIENCE_FAILURE = "CREATE_EXPERIENCE_FAILURE";

export const UPDATE_EXPERIENCE_REQUEST = "UPDATE_EXPERIENCE_REQUEST";
export const UPDATE_EXPERIENCE_SUCCESS = "UPDATE_EXPERIENCE_SUCCESS";
export const UPDATE_EXPERIENCE_FAILURE = "UPDATE_EXPERIENCE_FAILURE";

export const DELETE_EXPERIENCE_REQUEST = "DELETE_EXPERIENCE_REQUEST";
export const DELETE_EXPERIENCE_SUCCESS = "DELETE_EXPERIENCE_SUCCESS";
export const DELETE_EXPERIENCE_FAILURE = "DELETE_EXPERIENCE_FAILURE";

// Importa il servizio API
import ExperiencesAPI from "../../services/Experiences";

// Helper: Gestione errori con fallback
const handleError = (dispatch, actionType, error) => {
  const errorMessage = error?.message || "Si è verificato un errore.";
  console.error(errorMessage);
  dispatch({ type: actionType, payload: errorMessage });
};

// Action: Ottieni tutte le esperienze
export const fetchExperiences =
  (user = "Francois") =>
  async (dispatch) => {
    dispatch({ type: FETCH_EXPERIENCES_REQUEST });
    try {
      const experiences = await ExperiencesAPI.userExperiences(user);
      dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: experiences });
    } catch (error) {
      handleError(dispatch, FETCH_EXPERIENCES_FAILURE, error);
    }
  };

// Action: Crea una nuova esperienza
export const createExperience =
  (experienceData, user = "Francois") =>
  async (dispatch) => {
    dispatch({ type: CREATE_EXPERIENCE_REQUEST });
    try {
      const experience = await ExperiencesAPI.createUserExperiences(
        experienceData,
        user
      );
      dispatch({ type: CREATE_EXPERIENCE_SUCCESS, payload: experience });
      console.log("Esperienza creata con successo:", experience);
    } catch (error) {
      handleError(dispatch, CREATE_EXPERIENCE_FAILURE, error);
    }
  };

// Action: Aggiorna un'esperienza
export const updateExperience =
  (expID, experienceData, user = "Francois") =>
  async (dispatch) => {
    dispatch({ type: UPDATE_EXPERIENCE_REQUEST });
    try {
      const updatedExperience = await ExperiencesAPI.updateSpecificExperience(
        expID,
        experienceData,
        user
      );
      dispatch({
        type: UPDATE_EXPERIENCE_SUCCESS,
        payload: updatedExperience,
      });
      console.log("Esperienza aggiornata con successo:", updatedExperience);
    } catch (error) {
      handleError(dispatch, UPDATE_EXPERIENCE_FAILURE, error);
    }
  };

// Action: Elimina un'esperienza
export const deleteExperience =
  (expID, user = "Francois") =>
  async (dispatch) => {
    dispatch({ type: DELETE_EXPERIENCE_REQUEST });
    try {
      await ExperiencesAPI.deleteUserExperience(expID, user);
      dispatch({ type: DELETE_EXPERIENCE_SUCCESS, payload: expID });
      console.log(`Esperienza con ID ${expID} eliminata con successo.`);
    } catch (error) {
      handleError(dispatch, DELETE_EXPERIENCE_FAILURE, error);
    }
  };
