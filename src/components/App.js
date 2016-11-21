import React, {Component} from 'react';
import GraphWidget from 'widget-promotion-graph';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            event: {
                startDate: '2016-11-19',
                endDate: '2016-11-25'
            },
            uiConfig: {
                col: {
                    minWidth: 20,
                    maxWidth: 30
                },
                yAxisWidth: 100,
            }
        };


    }
    render(){
        return (
            <GraphWidget 
                        {...this.state} 
                />)
    }
}