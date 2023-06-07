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

  const lastWeek = getLastWeek()

  const dataWeek = lastWeek.map(day => {
    return {
      name: day,
      notes: notes.filter(note => note.createAt === day).length,
    }
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
      <ul>
        {list}
      </ul>
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
        <YAxis tickCount={4} interval={0} domain={[0, Math.max(Math.max(...dataWeek.map(item => item.notes)), 2)]} stroke="#fff" />
        <Tooltip />
        <Bar dataKey="notes" fill="#aa0000" />
      </BarChart>
    </>
  )
}

export default DashBoard