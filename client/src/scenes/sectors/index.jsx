import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import SectorChart from "../../components/SectorChart"

const Sectors = () => {
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Sector distribution" />
        <SectorChart/>
    </Box>
  )
}

export default Sectors