import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useEffect } from "react";
import {
  MOVIE_PLAYING,
  MOVIE_POPULAR,
  MOVIE_TOPRATED,
  MOVIE_UPCOMING,
} from "../config/api_config";
import { getMoviesList } from "../services/api";

const MovieDropdown = ({ setMovies, moviesLoading }) => {
  const [service, setService] = React.useState("");

  const handleChange = (itemValue) => {
    setService(itemValue);
    getMoviesList(itemValue).then(
      (res) => {
        setMovies(res);
        moviesLoading(false);
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    handleChange(MOVIE_POPULAR);
  }, []);

  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={handleChange}
        >
          <Select.Item label="Now Playing" value={MOVIE_PLAYING} />
          <Select.Item label="Popular" value={MOVIE_POPULAR} />
          <Select.Item label="Top Rated" value={MOVIE_TOPRATED} />
          <Select.Item label="Upcoming" value={MOVIE_UPCOMING} />
        </Select>
      </Box>
    </Center>
  );
};

export default MovieDropdown;
