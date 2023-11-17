import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import TopicChart from "../../components/TopicChart"

const Topics = () => {
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Topic distribution" />
        <TopicChart/>
    </Box>
  )
}

export default Topics