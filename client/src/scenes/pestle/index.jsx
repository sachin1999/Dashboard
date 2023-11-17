import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import PestleChart from "../../components/PestleChart"

const Topics = () => {
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="PESTLE distribution" />
        <PestleChart/>
    </Box>
  )
}

export default Topics