import React, { useEffect } from "react";
import * as d3 from "d3";

const GraphicChart: React.FC = () => {
  useEffect(() => {
    const width = 470;
    const height = 280;

    const data = [
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

    const xScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => d.x) as number,
      ])
      .range([30, width]);

    const yScale = d3
      .scaleLinear()
      .domain([
        -8.5,
        d3.max(data, (d) => d.y) as number,
      ])
      .range([height, 115])
      .domain([-10, 350])
      .range([280, 10]);

    const lineData = data.map((d) => [d.x, d.y]);
    
    const area = d3
      .area<{ x: number, y: number }>()
      .x((d) => xScale(d.x))
      .y0(height)
      .y1((d) => yScale(d.y));
      
    const svg = d3.select<SVGSVGElement, unknown>(".gpraphic_chart svg");
    if (svg.empty()) {
      d3.select(".gpraphic_chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    }
    svg
      .append("path")
      .datum(data)
      .attr("fill", "rgba(111,79,242,.1)")
      .attr("d", area);
    svg
      .append("path")
      .datum(lineData)
      .attr("fill", "none")
      .attr("stroke", "#6F4FF2")
      .attr("stroke-width", 4)
      .attr(
        "d",
        d3
          .line<number[]>()
          .x((d) => xScale(d[0]))
          .y((d) => yScale(d[1]))
      );

    svg
      .selectAll<SVGCircleElement, unknown>("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", (d, i) => (i === data.length - 1 ? "last-point" : "point"))
      .attr("cx", (d) => xScale(d.x) as number)
      .attr("cy", (d) => yScale(d.y) as number)
      .attr("r", 6.5)
      .attr("fill", "#6F4FF2");

    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(0)
      .tickPadding(-20);

    const yAxisGroup = svg.append("g").attr("class", "y-axis").call(yAxis);
    yAxisGroup.select(".domain").attr("stroke", "none");

    yAxisGroup
      .selectAll(".tick text")
      .attr("fill", "#6F4FF2")
      .attr("font-size", "12");
  }, []);

  return <div className="gpraphic_chart"></div>;
};

export default GraphicChart;
