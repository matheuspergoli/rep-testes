import React from 'react'

interface MenuItemProps {
  url: string
  texto: string
  icone: any
}

function MenuItem(props: MenuItemProps) {
  return (
    <li className=''>
      {props.icone}
    </li>
  )
}

export default MenuItem