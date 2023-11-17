import { Box, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import RelevanceChart from '../../components/RelevanceChart'

const Relevance = () => {
    const theme = useTheme();

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Relevance" />
            <RelevanceChart/>
        </Box>
      )
}

export default Relevance