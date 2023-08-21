import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    console.log(process.env);
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "34.62569235688784",
          tr_latitude: tr_lat ? tr_lat : "34.82180556890069",
          bl_longitude: bl_lng ? bl_lng : "-92.52160292734698",
          tr_longitude: tr_lng ? tr_lng : "-92.15064106452138",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
