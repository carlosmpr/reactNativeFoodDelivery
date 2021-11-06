import * as React from "react"
import Svg, { SvgProps, Path, Ellipse } from "react-native-svg"

function Fries(props) {
  return (
    <Svg   width={80}
    height={80} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.5 51.5" {...props}>
      <Path
        d="M25.746 23.726c.763 0 1.632-.114 2.537-.33V0h-5v23.414c.878.204 1.721.312 2.463.312z"
        fill="#fab900"
      />
      <Path
        d="M33.283 21.182V5h-5v18c1.689-.402 3.501-.768 5-1.818z"
        fill="#fdeb08"
      />
      <Path
        d="M35.498 19.068a5.179 5.179 0 012.785-1.965V9h-5v12c.875-.612 1.645-1.136 2.215-1.932z"
        fill="#e09a0a"
      />
      <Path
        d="M39.664 16.902h2.859c.267 0 .518.05.76.122V12h-5v5.103a5.024 5.024 0 011.381-.201zM23.283 23V5h-5v16.231c1.507 1.04 3.318 1.378 5 1.769z"
        fill="#fdeb08"
      />
      <Path
        d="M15.999 19.068c.586.817 1.381 1.309 2.284 1.932V9h-5v8.124a5.177 5.177 0 012.716 1.944z"
        fill="#f8b700"
      />
      <Path
        d="M8.974 16.902h2.859c.499 0 .985.082 1.45.223V12h-5v4.999c.221-.058.45-.097.691-.097z"
        fill="#fdeb08"
      />
      <Path
        d="M39.664 16.402a5.06 5.06 0 00-4.139 2.128c-2.06 2.915-6.749 4.697-9.779 4.697s-7.714-1.781-9.774-4.697a5.06 5.06 0 00-4.139-2.128H8.974c-1.662 0-2.653 1.453-2.653 3.132v.175a86.89 86.89 0 004.823 28.763l.225.647c.456 1.31 1.963 2.381 3.35 2.381H36.78a3.624 3.624 0 003.575-3.028 84.688 84.688 0 004.824-28.786l-.001-.152c0-1.679-.991-3.132-2.653-3.132h-2.861z"
        fill="#d32500"
      />
      <Path
        d="M42.524 21.798h-2.859a5.06 5.06 0 00-4.139 2.128c-2.06 2.915-6.749 4.697-9.779 4.697s-7.714-1.781-9.774-4.697a5.06 5.06 0 00-4.139-2.128h-2.86c-1.358 0-2.257.975-2.545 2.245a86.851 86.851 0 004.715 24.428s8.654-1.972 14.64-1.972c5.978 0 14.534 2.188 14.57 1.972a84.732 84.732 0 004.728-24.372c-.274-1.298-1.18-2.301-2.558-2.301z"
        fill="#f55e30"
      />
      <Ellipse cx={26.283} cy={37.5} rx={7} ry={5} fill="#fac84d" />
    </Svg>
  )
}

export default Fries
