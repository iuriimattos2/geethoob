import React from 'react'
import { Pie } from '@reactchartjs/react-chart.js'

interface ChartProps {
  labels: string[]
  label: string
  data: number[]
  backgroundColour: string[]
}

const PieChart = (props: ChartProps) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: props.backgroundColour,
      },
    ],
  }

  console.log(props.labels)

  return (
    <>
      <Pie type="pie" data={data} />
    </>
  )
}

export default PieChart
