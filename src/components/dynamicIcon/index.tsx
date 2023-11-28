import React, { FC } from 'react'
import * as Icons from '@mui/icons-material'

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