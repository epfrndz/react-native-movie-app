import { View } from "react-native";
import React from "react";
import ResultCard from "../listItems/ResultCard";
import { FlatList } from "native-base";

const ResultList = ({ movies, navigation, tvshows }) => {
  return (
    <View>
      {movies ? (
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <ResultCard
              title={item.title}
              imageuri={item.poster_path}
              popularity={item.popularity}
              releasedate={item.release_date}
              navigation={navigation}
              id={item.id}
              type={"movie"}
            />
          )}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={tvshows}
          renderItem={({ item }) => (
            <ResultCard
              title={item.name}
              imageuri={item.poster_path}
              popularity={item.popularity}
              releasedate={""}
              navigation={navigation}
              id={item.id}
              type={"tvshow"}
            />
          )}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ResultList;
