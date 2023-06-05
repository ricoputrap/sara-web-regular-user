import withAuth from '@/hoc/withAuth'
import { NextPage } from 'next'
import React from 'react'

const Rooms: NextPage = () => {
  return (
    <div>Rooms</div>
  )
}

export default withAuth(Rooms);