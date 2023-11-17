import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../state/geoData";
import { fetchedCountries } from "../../state/api";

const Geography = ({ isDashboard = false }) => {
  const theme = useTheme();
  
  return (
    <Box m="1.5rem 2.5rem">
      <Header title={isDashboard ? "" : "GEOGRAPHY"} subtitle={isDashboard ? "" : "Find where your users are located."} />
      <Box
        mt="40px"
        height={isDashboard ? "200px" : "75vh" }
        // width={undefined}
        minHeight={isDashboard ? "200px" : undefined}
        minWidth={isDashboard ? "150px" : undefined}
        border={isDashboard ? "" : `1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {fetchedCountries ? (
          <ResponsiveChoropleth
          data={fetchedCountries}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200],
                },
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary[200],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            tooltip: {
              container: {
                color: theme.palette.primary.main,
              },
            },
          }}
          features={geoData.features}
          margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
          domain={[0, 50]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={150}
          projectionTranslation={[0.45, 0.6]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1.3}
          borderColor="#000000"
          legends={isDashboard ? [""] : [
            {
              anchor: "bottom-right",
              direction: "column",
              justify: true,
              translateX: 0,
              translateY: -125,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: theme.palette.secondary[200],
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: theme.palette.background.alt,
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  )
};

export default Geography;