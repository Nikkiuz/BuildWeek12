const API_KEY_PEXELS =
  "dvVOZ9Pa1H3GM0mJcBfQUA8ukrp2DVD82hmIpvyP1kyGo2nxYXG1FBXH";

const URL_PEXELS = "https://api.pexels.com/v1/search?query=";
const URL_IMG_PAGE = "&per_page=10";

const imgCasuale = (query) => {
  return fetch(`${URL_PEXELS}+${query}+${URL_IMG_PAGE}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${API_KEY_PEXELS}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log("STAMPA JSON", data.photos);
      return data.photos;
    })
    .catch((error) => {
      console.error("Errore durante il fetch:", error);
      throw error;
    });
};

export default imgCasuale;
