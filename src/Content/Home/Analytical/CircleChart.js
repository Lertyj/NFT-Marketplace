import React, { useEffect } from 'react';
import * as d3 from 'd3';
export function CircleChart(){
    useEffect(() => {
var width = 260;
var height = 260;
var radius = Math.min(width, height) / 2;

// Цвета для закрашивания данных
var color = d3.scaleOrdinal()
    .range(["#6F4FF2", "rgba(111,79,242,.1)"]);

// Создаем круговой график
var svg = d3.select('.chart svg')
    if(svg.empty()){
    svg = d3.select('.chart')
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    }
    

// Задаем данные для графика
var data = [50, 50];

// Создаем дуги для кругового графика
var arc = d3.arc()
    .innerRadius(radius - 30)
    .outerRadius(radius - 10);

// Создаем функцию для расчета углов дуг
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d; });

// Добавляем дуги к графику
var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

// Добавляем цвета к дугам
g.append("path")
    .attr("d", arc)
    .style("fill", function(d, i) { return color(i); })
    .style("stroke", "white") // Устанавливаем цвет обводки
    .style("stroke-width", 1.5); // Устанавливаем ширину обводки
}, []);

return (<div class="chart"></div>);
}
