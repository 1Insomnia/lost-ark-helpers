// PropTypes
import PropTypes from "prop-types";
// React
import { useState } from "react";
// Next
import NextImage from "next/image";
// MUI
import { Box, Tabs, Tab } from "@mui/material";

function TabPanel({ children, value, index, ...other }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box {...other}>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

a11yProps.propTypes = {
  index: PropTypes.number,
};

export default function CheatsheetTabs({ gateList }) {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "680px" }} py={4}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {gateList.map((gate, index) => (
            <Tab label={gate.name} {...a11yProps(index)} key={gate.name} />
          ))}
        </Tabs>
      </Box>
      {gateList.map((gate, index) => (
        <TabPanel value={value} index={index} key={gate.name}>
          <Box mt={4}>
            <NextImage
              src={gate.image}
              alt={gate.name}
              style={{ width: "100%", height: "auto" }}
              width={680}
              height={680}
              priority
              quality={100}
            />
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
}

CheatsheetTabs.propTypes = {
  gateList: PropTypes.array,
};
