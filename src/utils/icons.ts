import { IconType } from 'react-icons'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux } from 'react-icons/fa'
import { MdOutlineLightMode, MdDarkMode, MdPhoneIphone } from 'react-icons/md'
import { BsGlobe, BsAndroid2, BsNintendoSwitch, BsChevronDown, BsChevronUp } from 'react-icons/bs'

type Icons = {
  [key in
    | 'light'
    | 'dark'
    | 'down'
    | 'up'
    | 'pc'
    | 'playstation'
    | 'xbox'
    | 'mac'
    | 'linux'
    | 'android'
    | 'ios'
    | 'nintendo'
    | 'web'
    | string]: IconType
}

export const icons: Icons = {
  light: MdOutlineLightMode,
  dark: MdDarkMode,
  down: BsChevronDown,
  up: BsChevronUp,

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
