import { useSelector } from "react-redux"
import { selectAll } from '../../redux/notes.Slice'
import { tagOptions } from "../../redux/notes.Slice";
import { getLastWeek } from "../../utils/getLastWeek";
import CustomPieChart from "../../components/customPieChart/PieChart";
import CustomBarChart from "../../components/customBarChart/CustomBarChart";
import './dashBoard.scss'

const DashBoard = ({ }) => {
  const notes = useSelector(selectAll)
  const data = tagOptions.map(tag => {
    return {
      name: tag.label,
      value: notes.filter(item => item.tags.includes(tag.label)).length
    }
  })

  const lastWeek = getLastWeek()

  const dataWeek = lastWeek.map(day => {
    return {
      name: day,
      notes: notes.filter(note => note.createAt === day).length,
    }
  })

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">{`Всего заметок: ${notes.length}`}</h1>
      <CustomPieChart data={data} className="dashboard__pie" />
      <CustomBarChart dataWeek={dataWeek} className="dashboard__bar" />
    </div>
  )
}

export default DashBoard