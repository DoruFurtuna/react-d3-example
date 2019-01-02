import * as React from "react";
import "./ChartView.scss";

import * as d3 from "d3";
import { DataType } from "./ChartView.d";

class ChartView extends React.Component {
  componentDidMount() {
    this._drawChart();
  }
  render() {
    return (
      <div className="ChartViewWrapper">
        <label className="ChartViewTitle">Activity</label>
        <div id="Chart1" />
      </div>
    );
  }

  _drawChart() {
    // Margin setup
    const margin = { top: 30, right: 30, bottom: 20, left: 40 };
    const width = 550 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Basic SVG canvas
    const svg = d3
      .select("#Chart1")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Temporal scale
    const x = d3.scaleTime().range([0, width]);

    // Linear scale
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3
      .line<DataType>()
      .curve(d3.curveNatural)
      .x(d => x(d.date))
      .y(d => y(d.value));

    const g = svg.append("g").attr("transform", "translate(-10, 0)");

    fetch(
      "https://www.quandl.com/api/v3/datasets/EOD/HD.json?start_date=2018-09-01&end_date=2018-12-19&collapse=weekly&api_key=AR1Vy__1c4vum2A--dAf"
    )
      .then(response => response.json())
      .then(response => {
        const parseDate = d3.timeParse("%Y-%m-%d");

        const arrayData: [string, number][] = response.dataset.data;
        const data: DataType[] = arrayData.map((item, index) => ({
          id: index,
          date: parseDate(item[0]) || new Date(),
          value: item[1]
        }));

        // Pre-processing
        data.forEach(d => {
          d.value = +d.value;
        });

        let yMax = d3.max(data, d => d.value);
        let yMin = d3.min(data, d => d.value);

        if (yMax === undefined) {
          yMax = 1;
        }
        if (yMin === undefined) {
          yMin = 0;
        }

        x.domain([new Date("2018-09-01"), new Date("2018-12-19")]);
        y.domain([yMin - 20, yMax]);

        const areaFunction = d3
          .area<DataType>()
          .curve(d3.curveNatural)
          .x(d => x(d.date))
          .y0(height)
          .y1(d => y(d.value));

        // Define the gradient below the line chart
        const areaGradient = svg
          .append("defs")
          .append("linearGradient")
          .attr("id", "areaGradient")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "0%")
          .attr("y2", "100%");

        // Append the first stop - the color at the top
        areaGradient
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", "#186dea")
          .attr("stop-opacity", 0.6);
        // Append the second stop - white transparant almost at the end
        areaGradient
          .append("stop")
          .attr("offset", "80%")
          .attr("stop-color", "white")
          .attr("stop-opacity", 0);

        const areaFill = areaFunction(data) || "";

        svg
          .append("path")
          .style("fill", "url(#areaGradient)")
          .attr("transform", "translate(-10, 0)")
          .attr("d", areaFill);

        g.selectAll("path")
          .data([data])
          .enter()
          .append("path")
          .attr("class", "line")
          .attr("d", line);

        g.selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", d => x(d.date))
          .attr("cy", d => y(d.value))
          .attr("r", (d, i) => 7)
          .attr("id", d => d.id)
          .style("opacity", "0")
          .attr("fill", "#186dea")
          .on("mouseover", function(d) {
            d3.select(this)
              .transition()
              .duration(200)
              .style("opacity", "1");

            g.selectAll("#tooltip")
              .data([d])
              .enter()
              .append("text")
              .attr("id", "tooltip")
              .text((dataItem, i) => dataItem.value)
              .attr("y", dataItem => y(dataItem.value) - 12)
              .attr("x", dataItem => x(dataItem.date) - 10);

            g.selectAll("#tooltip_path")
              .data([d])
              .enter()
              .append("line")
              .attr("id", "tooltip_path")
              .attr("class", "line")
              .attr("x1", dataItem => x(dataItem.date))
              .attr("x2", dataItem => x(dataItem.date))
              .attr("y1", height)
              .attr("y2", dataItem => y(dataItem.value))
              .attr("stroke", "#186dea")
              .style("stroke-dasharray", "3, 3");
          })

          .on("mouseout", function(d) {
            d3.select(this)
              .transition()
              .duration(500)
              .style("opacity", "0")
              .style("fill", "#186dea");

            g.selectAll("#tooltip").remove();
            g.selectAll("#tooltip_path").remove();
          });

        const axisBottom = d3
          .axisBottom(x)
          .ticks(5)
          .tickFormat(d3.timeFormat("%b"));

        svg
          .append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(axisBottom);

        const axisLeft = d3.axisLeft(y).ticks(5);

        svg
          .append("g")
          .attr("class", "axis axis--y")
          .call(axisLeft);
      });
  }
}

export default ChartView;
