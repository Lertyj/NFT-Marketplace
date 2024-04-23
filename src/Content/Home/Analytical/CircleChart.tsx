import React, { useEffect } from "react";
import * as d3 from "d3";

const CircleChart: React.FC = () => {
  useEffect(() => {
    const width = 260;
    const height = 260;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal<string>().range(["#6F4FF2", "rgba(111,79,242,.1)"]);

    let svg = d3.select<SVGSVGElement, unknown>(".chart svg");
    if (svg.empty()) {
      const svgElement = d3.select<HTMLElement, unknown>(".chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      svg = svgElement.append<SVGSVGElement>("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
    }

    const data = [50, 50];

    interface ArcData {
      startAngle: number;
      endAngle: number;
    }

    const arc = d3.arc<ArcData>()
      .innerRadius(radius - 30)
      .outerRadius(radius - 10);

    const pie = d3.pie<number>()
      .sort(null)
      .value((d: number) => d);

    const g = svg.selectAll<SVGGElement, unknown>(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", (d: d3.PieArcDatum<number>) => arc(d) || "")
      .style("fill", (d: d3.PieArcDatum<number>, i: number) => color(String(i)))
      .style("stroke", "white")
      .style("stroke-width", 1.5);

  }, []);

  return <div className="chart"></div>;
};

export default CircleChart;
