import React, { Component } from 'react'

class ChartController extends Component {
    constructor(props) {
        super(props)
        this.renderContent = this.renderContent.bind(this)
    }

    componentWillUpdate() {
        this.renderContent()
    }

    renderContent() {
        return(
            <div>
            {this.props.renderChart}
            {this.props.renderChartDollar}
            {this.props.renderChartTrend}
            </div>
        )
    }
    
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default ChartController

// import React from 'react'

// const ChartController = (props) => {
//     componentWillUpdate() {
//         {props.renderChart}
//         {props.renderChartDollar}
//         {props.renderChartTrend}
//     }

//     console.log(props)
//     return(
//         <div>
//             {props.renderChart}
//             {props.renderChartDollar}
//             {props.renderChartTrend}
//         </div>
//     )
// }