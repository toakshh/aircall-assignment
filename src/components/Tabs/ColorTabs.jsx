import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import { apiUrl, tabs } from "../../constants";
import useApi from "../../hooks/useApi";
import Accordion from "../Accordion/Accordion";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ColorTabs = () => {
  const [allCalls, isLoading, error] = useApi(apiUrl);
  const [value, setValue] = useState(0);
  // console.log("colorsTab", Math.random());

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  if (error) {
    return (
      <>
        <h3>Something went wrong ! Please try again later.</h3>
        <div>{error}</div>;
      </>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tab headers */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="call list tab">
          {tabs?.map((tab, i) => {
            return <Tab key={tab + i} label={tab} />;
          })}
        </Tabs>
      </Box>

      {/* Tab body */}
      <CustomTabPanel value={value} index={0}>
        {/* calls list */}
        <div>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            allCalls?.map((call) => {
              return (
                <div key={call.id}>
                  <Accordion data={call} />
                </div>
              );
            })
          )}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        archived calls list
      </CustomTabPanel>
    </Box>
  );
};

export default ColorTabs;
