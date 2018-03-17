import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2'

class TrendChart extends Component {
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {            
            chartData: {
                labels: ['BTC', 'Dash', 'ETH', 'LTC'],
                datasets: [
                    {
                        label: 'USD',
                        data: [
                            this.props.btcTrends.oneHour,
                            this.props.dashTrends.oneHour,
                            this.props.ethTrends.oneHour,
                            this.props.ltcTrends.oneHour
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ]
                    },
                    {
                        label: 'EUR',
                        data: [
                            this.props.btcTrends.oneDay,
                            this.props.dashTrends.oneDay,
                            this.props.ethTrends.oneDay,
                            this.props.ltcTrends.oneDay
                        ],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                        ]
                    },
                    {
                        label: 'One Week Trend',
                        data: [
                            this.props.btcTrends.oneWeek,
                            this.props.dashTrends.oneWeek,
                            this.props.ethTrends.oneWeek,
                            this.props.ltcTrends.oneWeek
                        ],
                        backgroundColor: [
                            'rgba(75, 102, 102, 0.6)',
                            'rgba(75, 102, 102, 0.6)',
                            'rgba(75, 102, 102, 0.6)',
                            'rgba(75, 102, 102, 0.6)',
                        ]
                    }
                ]
            }            
        }
    }

    render() {
        return(
            <div>
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: 'BTC Value',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: "top"
                        }
                    }
                } />
            </div>
        )
    }
}

export default TrendChart