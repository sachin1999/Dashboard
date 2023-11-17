import { Box, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { fetchedIntensity } from '../../state/api'
import { ResponsiveLine } from "@nivo/line";

const Intensity = ({ isDashboard = false }) => {
    const theme = useTheme();
    const formattedData = [{
        id: "intensityCount",
        color:theme.palette.secondary[200],
        data: fetchedIntensity.map(item => ({
            x: parseInt(item.intensity),
            y: item.count,
          }))
    }]

    return (
        <Box m="1.5rem 2.5rem">
            <Header title={isDashboard ? "" : "Intensity Count"} />
            <Box
                mt="40px"
                height={isDashboard ? "180px" : "75vh" }
                // width={undefined}
                minHeight={isDashboard ? "180px" : undefined}
                minWidth={isDashboard ? "180px" : undefined}
                border={isDashboard ? "" : `1px solid ${theme.palette.secondary[200]}`}
                borderRadius={isDashboard? "" : "4px"}
            >       
                <ResponsiveLine
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
                            color: theme.palette.primary.main,
                          },
                        },
                      }}
                      margin={
                          isDashboard
                          ? { top: 5, right: 5, bottom: 5, left: 5 }
                          : { top: 40, right: 80, bottom: 80, left: 80 }
        }
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Intensity',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    enableGridX={false}
                    lineWidth={5}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[]}
                />
            </Box>
        </Box>
      )
}

export default Intensity