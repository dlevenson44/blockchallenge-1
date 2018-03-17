import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super(props)
        var dashPerBtc = (this.props.btcValue / this.props.dashCapCoin.usd)
        var ethPerBtc = (this.props.btcValue / this.props.ethCapCoin.usd)
        var ltcPerBtc = (this.props.btcValue / this.props.ltcCapCoin.usd)
        this.state = {            
            chartData: {
                labels: ['DASH', 'ETH', 'LTC'],
                datasets: [
                    {
                        label: 'BitCoin per AltCoin',
                        data: [
                            dashPerBtc,
                            ethPerBtc,
                            ltcPerBtc
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
        this.render = this.render.bind(this)
    }

    render() {                
        return(
            <div>
                <Bar
                data={this.state.chartData}
                options={{
		            maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'USD Value',
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
}

export default Chart