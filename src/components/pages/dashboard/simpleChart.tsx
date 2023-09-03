import React, { useRef } from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
    title: {
        text: 'My chart',
    },
    series: [
        {
            type: 'line',
            data: [1, 2, 3],
        },
    ],
};


const SimpleChart = (props: HighchartsReact.Props) => {

    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    return (
        <div className="chart-wrapper">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartComponentRef}
                {...props}
            />
        </div>
    )
}

export default SimpleChart;