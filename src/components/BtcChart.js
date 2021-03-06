import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2'

class BtcChart extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            chartData: {
                labels: [`${(this.props.altPerBtc.dash).toPrecision(4)} DASH per BTC`, 
                    `${(this.props.altPerBtc.eth).toPrecision(4)} ETH per BTC`, 
                    `${(this.props.altPerBtc.ltc).toPrecision(4)} LTC per BTC`],
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
    }

    render() {                
        return(
            <div className="chart-container">
                <Doughnut
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
	            }} />
            </div>
        )
    }
}

export default BtcChart