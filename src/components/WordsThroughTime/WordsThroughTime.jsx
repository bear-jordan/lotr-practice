import { useState, useEffect, useRef } from 'react'
import * as d3 from "d3"

import './WordsThroughTime.css'
import { config } from "./js/config"
import { layout } from "./js/layout"
import { data } from "./js/request"

function WordsThroughTime() {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    const figureData = layout([data])

    svg.select(".figure")
      .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".paths")
      .selectAll(".path")
      .data(figureData)
      .join("path")
      .attr("d", d => d.d)
      .classed("path", true)
  }, [])

  return (
    <>
      <svg height={config.box_height} width={config.box_width} ref={svgRef}>
        <g className="figure">
          <g className="paths"></g>
          <g className="x-axis"></g>
          <g className="y-axis"></g>
        </g>
      </svg>
    </>
  )
}

export default WordsThroughTime
