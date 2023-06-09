import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { COLORS } from '../../utils/consts'

const CustomPieChart = ({ data, className }) => {
  const list = data.map((item, index) => {
    return item.value
      ? <li key={index} style={{ 'color': `${COLORS[index]}` }}>{`${item.name}: ${item.value}`}</li>
      : null
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