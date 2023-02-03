import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Center, Container, Heading, VStack } from "native-base";
import Form from "../forms/Form";
import { getSearchList } from "../services/api";
import { SEARCH_MOVIE } from "../config/api_config";
import SearchList from "../lists/SearchList";

const SearchContainer = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState(SEARCH_MOVIE);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlank, setIsBlank] = useState(true);
  const [results, setResults] = useState([]);

  const handleInputChange = (text) => {
    setSearchQuery(text);
  };
  const fetchResults = () => {
    setIsLoading(true);
    if (searchQuery === "" || searchType === "") {
      alert("Please enter search term and search type");
    } else {
      getSearchList(searchQuery, searchType).then(
        (res) => {
          setResults(res);
          setIsLoading(false);
          setIsBlank(false);
        },
        (err) => console.log(err)
      );
    }
  };

  return (
    <VStack mb={5} pb={60}>
      <Center px={4}>
        <Form
          onInputChange={handleInputChange}
          fetchResults={fetchResults}
          searchType={searchType}
          setSearchType={setSearchType}
        />
      </Center>
      <Box mx={'5%'} width={350} justifyContent='center'>
        {isBlank ? (
          <Heading mt={20} textAlign='center'>Please initiate a search</Heading>
        ) : (
          <SearchList searchResults={results} navigation={navigation} />
        )}
      </Box>
    </VStack>
  );
};

export default SearchContainer;
