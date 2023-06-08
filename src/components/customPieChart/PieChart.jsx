import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const CustomPieChart = ({ data, className }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const list = data.map((item, index) => {
    return <li style={{ 'color': `${COLORS[index]}` }}>{`${item.name}: ${item.value}`}</li>
  })

  return (
    <div className={className}>
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={'100%'}
          fill="#afafaf"
          label={''} >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default CustomPieChart