import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { fetchedRelevance } from '../state/api';

const RelevanceChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    
    const formattedData = fetchedRelevance.map(({Relevance, Count}) => 
    ({Relevance: parseInt(Relevance), Count: Count}));

  return (
    <Box
        mt="10px"
        height={isDashboard ? "250px" : "75vh" }
        width={undefined}
        minHeight={isDashboard ? "250px" : undefined}
        minWidth={isDashboard ? "300px" : undefined}
        border={isDashboard ? "" : `1px solid ${theme.palette.secondary[200]}`}
        borderRadius={isDashboard ? undefined : "4px"}
    >
        <ResponsiveBar
            data={formattedData}
            keys={[
                'Count'
            ]}
            indexBy="Relevance"
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
            margin={
              isDashboard
              ? { top:10, right: 10, bottom: 10, left:10 }
              : { top: 50, right: 130, bottom: 50, left: 60 }
            }
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={theme.palette.secondary[200]}
            
            borderColor={theme.palette.secondary[200]}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Relevance',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Count',
                legendPosition: 'middle',
                legendOffset: -40
            }}
        />
    </Box>
  )
}

export default RelevanceChart