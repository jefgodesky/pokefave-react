import React, { ReactElement } from 'react'

interface TabProps {
  label: string
  active?: boolean
  onClick: Function
}

function Tab ({ label, active, onClick }: TabProps): ReactElement {
  return (
    <button className={active === true ? 'active' : ''} onClick={() => { onClick() }}>
      {label}
    </button>
  )
}

export default Tab
