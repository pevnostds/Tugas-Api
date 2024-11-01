import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const useAnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        setAnimeList(response.data.data); 
      } catch (error) {
        console.error("Gagal Mengambil Data:", error);
        setError(error); 
      }finally {
        setLoading(false);
      }
    };
    fetchAnimeList();
  }, []);
  return { animeList, error,loading };
};

export const useAnimeDetail = () => {
  const { id } = useParams(); 
  const [anime, setAnime] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
      } catch (error) {
        console.error("Error fetching anime detail:", error);
        setError(error);
      }
    };

    fetchAnimeDetail();
  }, [id]);

  return { anime, error };
};

