import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
const useNowPlayingMovies = () => {
  // Custom hook logic to fetch and return now playing movies
   const dispatch = useDispatch();
  
   const getNowPlayingMovies = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
   }

   useEffect(() => {
    getNowPlayingMovies();
   },[])
}
export default useNowPlayingMovies;