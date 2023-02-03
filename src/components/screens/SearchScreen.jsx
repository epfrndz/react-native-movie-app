import SearchContainer from "../containers/SearchContainer";

export default SearchScreen = ({ route }) => {
  return <SearchContainer navigation={route.params.navigation} />;
};
