import { View, Text } from "react-native";
import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
} from "native-base";

const ResultCard = (props) => {
  const { title, imageuri, popularity, releasedate, navigation, id, type } = props;
  // console.log(title)
  return (
    <HStack my={2} space={2} alignItems='center'>
      <AspectRatio width={"30%"} ratio={{ base: 1 / 1 }}>
        <Image
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${imageuri}`,
          }}
          alt={title}
        />
      </AspectRatio>
      <Box width={"55%"}>
        <Heading size={"xs"}>{title}</Heading>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Date: {releasedate}</Text>
        <Button variant="solid" px={"15%"} onPress={() => {
          navigation.navigate('Show', {type, title, id, releasedate, imageuri})
        }}>
          More Details
        </Button>
      </Box>
    </HStack>
  );
};

export default ResultCard;
