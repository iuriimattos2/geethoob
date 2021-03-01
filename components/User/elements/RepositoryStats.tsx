import React from 'react'
import { Pie, Bar, Doughnut } from '@reactchartjs/react-chart.js'

import styled from 'styled-components'

const ChartContainer = styled.div`
  max-width: 500px;
`

interface ChartProps {
  labels: string[]
  data: number[]
  backgroundColour: string[]
  starredData: number[]
  starredReposName: string[]
}

const Charts = (props: ChartProps) => {
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
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
      },
    ],
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
      labels: {
        usePointStyle: true,
      },
    },
  }

  return (
    <>
      <ChartContainer>
        <Pie type="pie" data={data} />
      </ChartContainer>
      <ChartContainer>
        <Bar type="bar" data={starredData} options={options} />
      </ChartContainer>
    </>
  )
}

export default Charts
