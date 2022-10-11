import React, { ReactElement } from 'react'

interface TabProps {
  label: string
  active?: boolean
}

function Tab ({ label, active }: TabProps): ReactElement {
  return (
    <button className={active === true ? 'active' : ''}>
      {label}
    </button>
  )
}

export default Tab
