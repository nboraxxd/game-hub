import { IconType } from 'react-icons'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux } from 'react-icons/fa'
import { MdOutlineLightMode, MdDarkMode, MdPhoneIphone } from 'react-icons/md'
import { BsGlobe, BsAndroid2, BsNintendoSwitch } from 'react-icons/bs'

interface Icons {
  [key: string]: IconType
}

const icons: Icons = {
  light: MdOutlineLightMode,
  dark: MdDarkMode,

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

export default icons
