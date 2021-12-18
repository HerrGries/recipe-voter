
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

export const ApiHandler = ({children, data, error, isLoading}) => {
     return (
        <>{
            error ? <Error /> : 
            isLoading ? <CircularProgress  /> :
            data ? children : null
        }</>
    )
}