import React, { useEffect } from "react";
import * as d3 from "d3";
export function GraphicChart() {
  useEffect(() => {
    var width = 470;
    var height = 280;

    // Создание данных для графика
    var data = [
      { x: 0, y: 0 },
      { x: 50, y: 105 },
      { x: 100, y: 95 },
      { x: 150, y: 160 },
      { x: 200, y: 140 },
      { x: 250, y: 210 },
      { x: 300, y: 120 },
      { x: 350, y: 90 },
      { x: 380, y: 130 },
    ];

    // Создание шкалы для оси X
    var xScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return d.x;
        }),
      ])
      .range([30, width]);

    // Создание шкалы для оси Y
    var yScale = d3
      .scaleLinear()
      .domain([
        -8.5,
        d3.max(data, function (d) {
          return d.y;
        }),
      ])
      .range([height, 115])
      .domain([-10, 350])
      .range([280, 10]);

    // Создание функции для отображения площади под линией
    var area = d3
      .area()
      .x(function (d) {
        return xScale(d.x);
      })
      .y0(height)
      .y1(function (d) {
        return yScale(d.y);
      });

    // Добавление графика на страницу
    var svg = d3.select(".gpraphic_chart svg"); // указание пути(класс, id элемента, в который должен входить график)
    if (svg.empty()) {
      d3.select(".gpraphic_chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    }
    // Добавление закрашенной области под линией
    svg
      .append("path")
      .datum(data)
      .attr("fill", "rgba(111,79,242,.1)")
      .attr("d", area);

    // Добавление линии на график
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#6F4FF2")
      .attr("stroke-width", 4)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return xScale(d.x);
          })
          .y(function (d) {
            return yScale(d.y);
          })
      );
    svg
      .selectAll("circle") // добавление точек на графике
      .data(data)
      .enter()
      .append("circle")
      .attr("class", function (d, i) {
        return i === data.length - 1 ? "last-point" : "point";
      })
      .attr("cx", function (d) {
        return xScale(d.x);
      })
      .attr("cy", function (d) {
        return yScale(d.y);
      })
      .attr("r", 6.5)
      .attr("fill", "#6F4FF2");
    // Создайте ось Oy с использованием масштаба
    var yAxis = d3
      .axisLeft(yScale)
      .tickSize(0) // Установите размер черточек равным 0, чтобы убрать их
      .tickPadding(-20); // Установите отступ от числовых значений

    // Добавьте шкалу на график
    var yAxisGroup = svg.append("g").attr("class", "y-axis").call(yAxis);
    yAxisGroup.select(".domain").attr("stroke", "none");
    // Измените цвет числовых значений
    yAxisGroup
      .selectAll(".tick text")
      .attr("fill", "#6F4FF2")
      .attr("font-size", "12");
  }, []);

  return <div class="gpraphic_chart"></div>;
}
// Добавьте класс "last-point" к последней точке вашего графика
