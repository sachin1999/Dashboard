import React from 'react'
import {ResponsivePie} from '@nivo/pie'
import { Box, useTheme } from '@mui/material'
import {fetchedSectors} from "../state/api"

const SectorChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const formattedData = Object.entries(fetchedSectors).map(
        ([id, value], i) => ({
            id:value.id === '' ? 'Unknown' : value.id,
            label: value.id === '' ? 'Unknown' : value.id,
            value: value.value,
        })
    );
    
  return (
    <Box
        mt="40px"
        height={isDashboard ? "200px" : "75vh" }
        width={undefined}
        minHeight={isDashboard ? "200px" : undefined}
        minWidth={isDashboard ? "200px" : undefined}
        border={isDashboard ? "" : `1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
    >
        <ResponsivePie
        data={formattedData}
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
                color: theme.palette.primary[400],
              },
            },
          }}
          margin={
          isDashboard
            ? { top: 10, right: 10, bottom: 10, left: 10 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsSkipAngle={5}
        arcLinkLabelsTextColor={theme.palette.secondary[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={theme.palette.secondary[100]}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: 400,
                translateY:  0,
                itemsSpacing: 0,
                itemWidth: 10,
                itemHeight: 22,
                itemTextColor: theme.palette.secondary[200],
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 15,
                symbolShape: 'circle',
            }
        ]}
    />
    </Box>
  )
}

export default SectorChart