import { Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const CustomBarChart = ({ dataWeek, className }) => {
  const maxValue = Math.max(Math.max(...dataWeek.map(item => item.notes)), 2)
  const tickCount = (maxValue % 2) + 3

  return (
    <div className={className}>
      <BarChart
        width={500}
        height={300}
        data={dataWeek}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      ><CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis tickCount={tickCount} interval={0} domain={[0, maxValue]} stroke="#fff" />
        <Tooltip />
        <Bar dataKey="notes" fill="#aa0000" />
      </BarChart>
    </div>
  )
}

export default CustomBarChart