// Action Types
export const FETCH_ALL_PROFILES_SUCCESS = "FETCH_ALL_PROFILES_SUCCESS";
export const FETCH_ME_PROFILE_SUCCESS = "FETCH_ME_PROFILE_SUCCESS";
export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_LOADING = "FETCH_LOADING";

// Importa il servizio API
import ProfilesAPI from "../../services/Profiles";

// Action: Ottieni tutti i profili
export const fetchAllProfiles =
  (keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_LOADING });

    ProfilesAPI.fetchALLProfile(keyName)
      .then((profiles) => {
        const filteredProfiles = profiles
          .filter(
            (profile) =>
              profile.image !==
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          )
          .slice(1, 20);
        dispatch({
          type: FETCH_ALL_PROFILES_SUCCESS,
          payload: filteredProfiles,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error.message,
        });
        console.error("Errore nel recupero dei profili:", error);
      });
  };

// Action: Ottieni il proprio profilo
export const fetchMeProfile =
  (keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_LOADING });

    ProfilesAPI.fetchMEProfile(keyName)
      .then((profile) => {
        dispatch({
          type: FETCH_ME_PROFILE_SUCCESS,
          payload: profile,
        });
        console.log(`Profilo personale di ${keyName}:`, profile);
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error.message,
        });
        console.error("Errore nel recupero del profilo personale:", error);
      });
  };

// Action: Ottieni il profilo di un utente specifico
export const fetchUserProfile =
  (userId, keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_LOADING });

    ProfilesAPI.fetchUSERIDProfile(userId, keyName)
      .then((profile) => {
        dispatch({
          type: FETCH_USER_PROFILE_SUCCESS,
          payload: profile,
        });
        console.log(`Profilo utente con ID ${userId} ottenuto:`, profile);
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error.message,
        });
        console.error("Errore nel recupero del profilo utente:", error);
      });
  };

// Action: Aggiorna il proprio profilo
export const updateProfile =
  (userData, keyName = "Francois") =>
  (dispatch) => {
    dispatch({ type: FETCH_LOADING });

    ProfilesAPI.updateProfile(userData, keyName)
      .then((updatedProfile) => {
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: updatedProfile,
        });
        console.log(`Profilo aggiornato con successo:`, updatedProfile);
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error.message,
        });
        console.error("Errore nell'aggiornamento del profilo:", error);
      });
  };

export const updateCopertinaProfile = (newUrl) => {
  return {
    type: "UPDATE_COPERTINA_PROFILE",
    payload: newUrl,
  };
};
