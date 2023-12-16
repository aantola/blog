import React, { FC } from 'react'
import {Interests}  from '@mui/icons-material'


const Icons = {Interests } // Add every icon that is going to be avaiable in frontend 
export type IconNames = keyof typeof Icons
export type IconProps = {
  iconName: IconNames
}

const DynamicmuiIcon: FC<IconProps> = ({
  iconName,...props
}) => {
  const Icon = Icons[iconName]
  return <Icon {...props} />
}

export default DynamicmuiIcon;