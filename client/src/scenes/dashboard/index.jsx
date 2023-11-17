import React from 'react'

import FlexBetween from '../../components/FlexBetween';
import Header from '../../components/Header';
import SectorChart from '../../components/SectorChart';
import Intensity from '../intensity';
import PestleChart from '../../components/PestleChart';
import { Box, useTheme } from '@mui/material';
import TopicChart from '../../components/TopicChart';
import RelevanceChart from '../../components/RelevanceChart';
import LikelihoodChart from '../../components/LikelihoodChart';
import Geography from '../geography';
const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
       <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      </FlexBetween>
    <Box mt="5px"
        display="grid"
        gridTemplateColumns="repeat(10, 1fr)"
        gridAutoRows="50px"
        gap="10px" >
        <Header subtitle="Intensity"/>
        <Intensity isDashboard={true}/>
    <Header subtitle="PESTLE"/>
      <PestleChart isDashboard={true}/>
      <Header subtitle="TOPICS"/>
      <TopicChart isDashboard={true}/>
      <Header subtitle="Sector"/>
      <SectorChart isDashboard={true}/>
    </Box>
    <Box  mt="220px"
        display="grid"
        gridTemplateColumns="repeat(10, 1fr)"
        gridAutoRows="50px"
        gap="10px">
      <Header subtitle="RELEVANCE"/>
      <RelevanceChart isDashboard={true}/>
      <Header subtitle="LIKELIHOOD"/>
      <LikelihoodChart isDashboard={true}/>
      <Header subtitle="Geography"/>
      <Geography isDashboard={true}/>
    </Box>
    </Box>

    
  )
}

export default Dashboard