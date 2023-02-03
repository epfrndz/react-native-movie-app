import { View, Text } from "react-native";
import React from "react";
import { Box, FlatList } from "native-base";
import ResultCard from "../listItems/ResultCard";

const SearchList = ({ searchResults, navigation }) => {
  return (
    <Box width={'100%'}>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <ResultCard
            title={item.title ? item.title : item.name}
            imageuri={item.poster_path}
            popularity={item.popularity}
            releasedate={item.release_date}
            navigation={navigation}
            id={item.id}
            type={item.title ? "movie" : "tvshow"}
          />
        )}
      />
    </Box>
  );
};

export default SearchList;
