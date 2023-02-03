import { View } from "react-native";
import React from "react";
import {
  FormControl,
  HStack,
  VStack,
  Input,
  Button,
  Icon,
  Select,
  CheckIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { SEARCH_MOVIE, SEARCH_MULTI, SEARCH_TV } from "../config/api_config";

const Form = (props) => {
  const { onInputChange, fetchResults, searchType, setSearchType } = props;

  const onSubmit = () => {
    console.log("form submitted");
    fetchResults();
  };

  const handleChange = (value) => {
    setSearchType(value);
  };

  return (
    <View>
      <VStack space={2} width="75%" py={5}>
        <FormControl isRequired>
          <FormControl.Label fontSize={"sm"}>
            Search Movie/TV Show Name
          </FormControl.Label>
          <Input
            placeholder="i.e. James Bond, CSI"
            variant="filled"
            bg="gray.200"
            px={3}
            width="120%"
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                name="ios-search"
                as={<Ionicons />}
              />
            }
            onChangeText={(value) => {
              onInputChange(value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label isRequired>Choose Search Type</FormControl.Label>
          <HStack w={"100%"} space={2}>
            <Select
              selectedValue={searchType}
              minW={"80%"}
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={handleChange}
            >
              <Select.Item label="Movie" value={SEARCH_MOVIE} />
              <Select.Item label="TV Show" value={SEARCH_TV} />
              <Select.Item label="Multi" value={SEARCH_MULTI} />
            </Select>
            <Button
              minW={"40%"}
              onPress={onSubmit}
              startIcon={<Icon as={Ionicons} name="ios-search" />}
            >
              Search
            </Button>
          </HStack>
          <FormControl.HelperText>
            Please select a search type
          </FormControl.HelperText>
        </FormControl>
      </VStack>
    </View>
  );
};

export default Form;
