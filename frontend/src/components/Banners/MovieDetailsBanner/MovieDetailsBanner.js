import React, {  useState } from "react";
import { useSelector } from "react-redux";

// import movies from "../../../Data";
import {
  MovieDetailsContainer,
  MovieDetailsTitleContainer,
  MovieDetailsRating,
  MovieDetailsTitle,
  MovieDetailsDescription,
  MovieDetailsImage,
  MovieDetailsContent,
  MovieDetailsGenre,
  MovieDetailsYear,
  MovieDetailsRuntime,
  TimeContainer,
  BackIcon,
  BackContainer,
} from "./MovieDetailsBannerStyles";

const MovieDetailsBanner = ({ setSwitchBanner, movieDetailsId }) => {
  const [singleMovie, setSingleMovie] = useState(null);

  // useEffect(() => {
  //   const newMovie = movies.find((movie) => movie.id === movieDetailsId);
  //   console.log(newMovie);
  //   setSingleMovie(newMovie);
  // });

  const { movieDetail } = useSelector((state) => state.detailedMovie);

  console.log(movieDetail);

  return (
    <>
      {movieDetail && (
        <MovieDetailsContainer>
          <MovieDetailsImage src={movieDetail.poster_path} />
          {/* description content */}
          <MovieDetailsContent>
            <MovieDetailsTitleContainer>
              <MovieDetailsTitle>{movieDetail.title}</MovieDetailsTitle>
              <MovieDetailsRating>
                {movieDetail.vote_average}
              </MovieDetailsRating>
              <BackContainer onClick={() => setSwitchBanner(false)}>
                <BackIcon size={30} />
                <span>Back to search</span>
              </BackContainer>
            </MovieDetailsTitleContainer>
            <MovieDetailsGenre>{movieDetail.genre}</MovieDetailsGenre>
            {/* year and runtime */}
            <TimeContainer>
              <MovieDetailsYear>{movieDetail.release_date}</MovieDetailsYear>
              <MovieDetailsRuntime>
                {movieDetail.runtime} min
              </MovieDetailsRuntime>
            </TimeContainer>
            <MovieDetailsDescription>
              {movieDetail.overview}
            </MovieDetailsDescription>
          </MovieDetailsContent>
        </MovieDetailsContainer>
      )}
    </>
  );
  // return <div>hello</div>;
};

export default MovieDetailsBanner;
