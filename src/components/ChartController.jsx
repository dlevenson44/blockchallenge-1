import React from 'react'

import BtcChart from './BtcChart'
import DollarChart from './DollarChart'
import TrendChart from './TrendChart'

const ChartController = (props) => {
    console.log(props)
    return(
        <div>
            {props.renderChart}
            {props.renderChartDollar}
            {props.renderChartTrend}
        </div>
    )
}
export default ChartController