import styled from "styled-components";
import movieBackground from "../../../images/movie-banner.jpg";

export const BannerContainer = styled.div`
  height: 40vh;
  background: url(${movieBackground}) no-repeat center center fixed;
  background-size: cover;
  /* background-size: 100% 100%; */
  /* background: grey; */
  padding: 1rem 3rem;
  z-index: 1;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);

    z-index: 3;
  }
`;

export const BannerContainerSearch = styled(BannerContainer)``;
export const BannerContainerMovieDetails = styled(BannerContainer)`
  height: 65vh;
  display: flex;
  align-items: center;
`;
