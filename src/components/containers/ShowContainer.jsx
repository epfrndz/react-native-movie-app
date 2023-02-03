import {
  Box,
  Text,
  Heading,
  VStack,
  AspectRatio,
  Image,
} from "native-base";
import React, { useState } from "react";
import { getMovie, getTV } from "../services/api";

const ShowContainer = ({ route }) => {
  const [showInfo, setShowInfo] = useState({});
  const { type, title, id, releasedate, imageuri } = route.params;

  const getFunctions = {
    movie: getMovie,
    tvshow: getTV
  }

  getFunctions[type](id).then((res) => {
    setShowInfo(res);
  });

  return (
    <Box width="100%" px={10}>
      <VStack py={10} space={5}>
        <Heading textAlign="center">{title}</Heading>
        <AspectRatio alignSelf="center" width={"85%"} ratio={{ base: 1 / 1 }}>
          <Image
            resizeMode="cover"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${imageuri}`,
            }}
            alt={title}
          />
        </AspectRatio>
        <Text>{showInfo.overview}</Text>
        <Text fontSize={'xs'}>
          <Text fontWeight="bold">Popularity:</Text> {showInfo.popularity} |{" "}
          <Text fontWeight="bold">Release Date:</Text> {releasedate}
        </Text>
      </VStack>
    </Box>
  );
};

export default ShowContainer;
