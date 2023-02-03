import MoviesContainer from "../containers/MoviesContainer";

const MoviesScreen = ({ route }) => {
  return <MoviesContainer navigation={route.params.navigation} />;
};

export default MoviesScreen;
