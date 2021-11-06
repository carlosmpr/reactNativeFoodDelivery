import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={50} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 15.707l-1.414-1.414L13.586 12 9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707z" />
    </Svg>
  )
}

export default SvgComponent
