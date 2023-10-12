import { IconType } from 'react-icons'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe, BsAndroid2, BsNintendoSwitch } from 'react-icons/bs'

type Icons = {
  [key in string]: IconType
}

export const platformIcons: Icons = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: BsAndroid2,
  ios: MdPhoneIphone,
  nintendo: BsNintendoSwitch,
  web: BsGlobe,
}
