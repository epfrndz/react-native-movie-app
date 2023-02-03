import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useEffect } from "react";
import { TV_AIRTODAY, TV_ONAIR, TV_POPULAR, TV_TOPRATED } from "../config/api_config";
import { getTVList } from "../services/api";

const TVDropdown = ({setTvshows, tvLoading}) => {
  const [service, setService] = React.useState(TV_POPULAR);

  const handleChange = (itemValue) => {
    setService(itemValue)
    getTVList(itemValue).then((res) => {
      setTvshows(res)
      tvLoading(false)
    }, err => console.log(err))
  }

  useEffect(() => {
    handleChange(TV_POPULAR)
  }, [])

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
          <Select.Item label="Airing Today" value={TV_AIRTODAY} />
          <Select.Item label="On the Air" value={TV_ONAIR} />
          <Select.Item label="Popular" value={TV_POPULAR} />
          <Select.Item label="Top Rated" value={TV_TOPRATED} />
        </Select>
      </Box>
    </Center>
  );
};

export default TVDropdown