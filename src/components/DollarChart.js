import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2'

class DollarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            chartData: {
                labels: ['hello', 'bye', 'ciao'],
                datasets: [
                    {
                        label: 'BitCoin per AltCoin',
                        data: [
                            1,
                            5,
                            3
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
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default DollarChart