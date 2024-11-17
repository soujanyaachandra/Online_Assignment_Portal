import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
    providedIn: 'root'
})
export class DonutChartService {

    public drawDonut(element: any, values: any, options: any) {

        const chartParameters: any = {
            chart: {
                type: 'pie',
                height: 200,
                backgroundColor: '#f9f9f9'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Score : <br>' + options.text.toFixed(2) + '  %',
                style: {
                    color: options.color,
                },
                align: 'center',
                verticalAlign: 'middle',
            },
            plotOptions:
            {
                pie:
                {
                    innerSize: '70%',
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: false,
                }
            },
            tooltip: { enabled: false },
            series: [{
                data: values
            }]
        }
        Highcharts.chart(element, chartParameters);
    }
}
