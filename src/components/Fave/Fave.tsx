import React, { ReactElement } from 'react'
import { ReactComponent as Star } from '../../assets/star.svg'

interface FaveProps {
  active?: boolean
  onClick: Function
}

function Fave ({ active, onClick }: FaveProps): ReactElement {
  const classes = active === true
    ? ['fave', 'is-fave', 'animate__animated', 'animate__tada']
    : ['fave']
  return (
    <button className={classes.join(' ')} onClick={() => onClick()}>
      <Star />
    </button>
  )
}

export default Fave
