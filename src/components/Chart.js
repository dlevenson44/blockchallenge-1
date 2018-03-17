import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super(props)
        var btcValue = this.props.btcValue
        console.log(typeof btcValue)
        console.log(btcValue)
        this.state = {            
            chartData: {
                labels: ['BTC', 'DASH', 'ETH', 'LTC'],
                datasets: [
                    {
                        label: 'USD Value',
                        data: [
                            btcValue,
                            10,
                            7,
                            16,
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
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
                        display: this.props.displayTitle,
                        text: 'Largest Cities in Mass',
                        fontSize: 20
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
	            }} />
            </div>
        )
    }
}

export default Chart