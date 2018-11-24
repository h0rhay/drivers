import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ driverTimings }) => (
  <div>
    {console.log(driverTimings)}
    {driverTimings.map((driver, index) => (
        <p>{driver.user_firstname} {driver.user_lastname} from {driver.nationality}!</p>
    ))}
    </div>
))
