import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            chartData: {
                labels: ['DASH per BTC', 'ETH per BTC', 'LTC per BTC'],
                datasets: [
                    {
                        label: 'BitCoin per AltCoin',
                        data: [
                            (this.props.altPerBtc.dash),
                            this.props.altPerBtc.eth,
                            this.props.altPerBtc.ltc
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                        ]
                    }
                ]
            }            
        }
        console.log( this.props.altPerBtc.dash)
        this.render = this.render.bind(this)
    }

    componentWillUpdate() {
        this.renderChart()
    }

    renderChart() {
        return(
            <div>
                <Doughnut
                data={this.state.chartData}
                options={{
		            maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'BTC Value',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: "right"
                    }
	            }} />
            </div>
        )
    }

    render() {                
        return(
            <div>
            {this.renderChart()}
            </div>
        )
    }
}

export default Chart