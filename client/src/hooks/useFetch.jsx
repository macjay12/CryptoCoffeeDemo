import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);   //limit one gif
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url); // set state of
    } catch (error) {
      setGifUrl("https://media2.giphy.com/media/XEOdmFHVznCerkI6CI/giphy.gif?cid=ecf05e4714xfdqbi94yvl3r7trvknwmlyulen6p4l7x2bndj&rid=giphy.gif&ct=g");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;

    