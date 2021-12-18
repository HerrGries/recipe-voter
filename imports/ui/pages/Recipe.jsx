
import React from 'react'
import { useGetFamiliesQuery } from '../redux/api'
import { ApiHandler } from '../components/ApiHandler'

export const Recipe = () => {
  const { data, error, isLoading } = useGetFamiliesQuery('bulbasaur')
  return (<ApiHandler data={data} error={error} isLoading={isLoading}><p> {data} </p> </ApiHandler>)
}