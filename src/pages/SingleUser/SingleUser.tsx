import React from 'react'
import Single from '../../components/Single/Single'
import { singleUser } from '../../data'

const SingleUser = () => {
  return (
    <div>
        <Single  {...singleUser}/>
    </div>
  )
}

export default SingleUser
