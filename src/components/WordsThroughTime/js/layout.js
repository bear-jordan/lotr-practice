import * as d3 from "d3"
import { config } from "./config"

function getMaxWords(data) {
    return data.map(d => d3.max(d.map(a => a.y)))
}

function getMaxChapter(data) {
    return data.map(d => d3.max(d.map(a => a.x)))
}

export function layout(data) {

    const wordsScale = d3.scaleLinear()
        .domain([0, getMaxWords(data)])
        .range([config.fig_height, 0])

    const wordsAxis = d3.axisLeft(wordsScale)
    
    const chapterScale = d3.scaleLinear()
        .domain([1, getMaxChapter(data)])
        .range([0, config.fig_width])

    const chapterAxis = d3.axisBottom(chapterScale)
    
    const layoutData = data.map(d => {        
        const item = {}
        const line = d3.line()
            .x(i => chapterScale(i.x))
            .y(i => wordsScale(i.y))
        item.d = line(d)

        return item
    })

    return [layoutData, chapterAxis, wordsAxis]
}
