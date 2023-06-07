import { useSelector } from "react-redux"
import { selectAll } from '../../redux/notes.Slice'
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { tagOptions } from "../../redux/notes.Slice";
import { getLastWeek } from "../../utils/getLastWeek";

const DashBoard = ({ }) => {
  const notes = useSelector(selectAll)
  const data = tagOptions.map(tag => {
    return {
      name: tag.label,
      value: notes.filter(item => item.tags.includes(tag.label)).length
    }
  })

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const list = data.map((item, index) => {
    return <li style={{ 'color': `${COLORS[index]}` }}>{`${item.name}: ${item.value}`}</li>
  })

  return (
    <>
      <h1>{`Всего заметок: ${notes.length}`}</h1>
      <PieChart width={200} height={200}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#afafaf"
          label={''} >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      {list}
    </>
  )
}

export default DashBoard