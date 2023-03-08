import React from 'react'

const AlertDanger = (props) => {
  return (
    <div className='alert alert-danger'>{props.msg}</div>
  )
}

const AlertInfo = (props) => {
    return (
      <div className='alert alert-info'>{props.msg}</div>
    )
  }

  const AlertSuccess = (props) => {
    return (
      <div className='alert alert-success'>{props.msg}</div>
    )
  }

export  {AlertDanger, AlertInfo, AlertSuccess};