import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import LikelihoodChart from '../../components/LikelihoodChart'

const Likelihood = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Likelihood" />
            <LikelihoodChart/>
        </Box>
      )
}

export default Likelihood