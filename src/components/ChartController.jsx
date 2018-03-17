import React from 'react'

import BtcChart from './BtcChart'
import DollarChart from './DollarChart'
import TrendChart from './TrendChart'

const ChartController = () => {
    return(
        <div>
            <BtcChart />
            <DollarChart />
            <TrendChart />
        </div>
    )
}
export default ChartController