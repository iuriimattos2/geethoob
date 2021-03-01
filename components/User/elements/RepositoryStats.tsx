import React from 'react'
import { Pie, Bar, Doughnut } from '@reactchartjs/react-chart.js'

import styled from 'styled-components'

const GraphsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
`

const ChartHeader = styled.h1`
  color: #61c3bc;
  font-size: 24px;
  margin-bottom: 30px;
`

const ChartContainer = styled.div`
  background: #111119;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  margin: 50px;
  height: 300px;
  box-shadow: 0px 0px 50px 5px #00000050;
  border-radius: 12px;
  width: 400px;
`

interface ChartProps {
  labels: string[]
  data: number[]
  backgroundColour: string[]
  starredData: number[]
  starredReposName: string[]
}

const Charts = (props: ChartProps) => {
  const chartColours = ['#2a9d8f', '#264653', '#e9c46a', '#f4a261', '#e76f51']

  const data = {
    responsive: false,
    labels: props.labels,
    datasets: [
      {
        label: 'Most Used Languages',
        data: props.data,
        backgroundColor: props.backgroundColour,
      },
    ],
  }

  const starredData = {
    labels: props.starredReposName,
    datasets: [
      {
        label: 'Most Starred Repos',
        data: props.starredData,
        backgroundColor: chartColours,
      },
    ],
  }

  const PieOptions = {
    legend: {
      display: false,
    },
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  }

  return (
    <GraphsContainer>
      <ChartContainer>
        <ChartHeader>Most Used Languages</ChartHeader>
        <Pie type="pie" data={data} options={PieOptions} />
      </ChartContainer>
      <ChartContainer>
        <ChartHeader>Most Starred Repositories</ChartHeader>
        <Bar type="bar" data={starredData} options={options} />
      </ChartContainer>
    </GraphsContainer>
  )
}

export default Charts
