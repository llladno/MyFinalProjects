
var myChart = echarts.init(document.getElementById('main'));

import { date } from "./data.js";

let c = date.map((x) => {
    return x.name;
})
let count = [] //Массив со значениями Вне программ
let count2 = [] //Массив со значениями В программах
var option = {
    title: {
        text: 'Проекты в программах и вне программ',
        subtext: "Сумма и процентное соотношение проектов, находящихся в программах и вне программ"
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        top: "bottom",
        pageButtonPosition:"end",
        icon: "circle"
    },
    xAxis: {
        data: ['Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь']
    },
    yAxis: {},
    series: [
        {
            name: 'В программе ИТ',
            type: 'bar',
            data: date.filter(x => { //Сортировка с условием, что x.name == в программе ит
                if (x.name == "В программе ИТ") {
                    count2.push(x.value)//Добавление значений в массив для последующего вывода
                    return x.value //Вывод значений в диаграмму
                }
            }),
            stack: "c",
            color: '#56B9F2',
            tooltip: {
                valueFormatter: value => value + ' шт.'
            }
        },
        {
            name: 'В программе ЦП',
            type: 'bar',
            
            data: date.filter((x, y) => {
                if (x.name == "В программе ЦП") {
                    return x.value
                }
            }),
            label: {
                show: true,
                fontStyle:"bold",
                position: "top",
                formatter: function (x) { // Вывод значений над баром
                    let b = x.dataIndex
                    return x.value + count2[b] 
                }
            }
            ,
            stack: "c",
            color: '#0078D2', 
            tooltip: {
                valueFormatter: value => value + ' шт.'
            }
        },
        {
            name: 'Вне программ ИТ',
            type: 'bar',
            data: date.filter(x => {
                if (x.name == "Вне программ ИТ") {
                    count.push(x.value)
                    return x.value
                }
            }),
            stack: "b",
            color: '#22C38E', 
            tooltip: {
                valueFormatter: value => value + ' шт.',

            }


        },
        {
            name: 'Вне программ ЦП',
            type: 'bar',
            data: date.filter((x, y) => {
                if (x.name == "Вне программ ЦП") {
                    return x.value
                }
            }),
            stack: 'b',
            color: '#00724C', 

            label: {
                show: true,
                position: "top",
                fontStyle:"bold",
                formatter:
                    function (x) {
                        let b = x.dataIndex
                        return x.value + count[b]
                    },
            },
            tooltip: { valueFormatter: value => value + " шт." },
        },

    ]
};

myChart.setOption(option);
