import React from 'react'

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