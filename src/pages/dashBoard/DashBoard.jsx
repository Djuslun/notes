import { useSelector } from "react-redux"
import { selectAll } from '../../redux/notes.Slice'
import { selectAll as selectAllFilter } from '../../redux/filters.Slice'
import { getLastWeek } from "../../utils/getLastWeek";
import CustomPieChart from "../../components/customPieChart/PieChart";
import CustomBarChart from "../../components/customBarChart/CustomBarChart";
// import { getDate } from "../../utils/getDay";
import NotesList from '../../components/notes-list/NotesList'
import './dashBoard.scss'

const DashBoard = ({ }) => {
  const notes = useSelector(selectAll)
  const tagOptions = useSelector(selectAllFilter)
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
      notes: notes.filter(note => note.createAt.split(',')[0] === day).length,
    }
  })

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">{`Всего заметок: ${notes.length}`}</h1>
      <CustomPieChart data={data} className="dashboard__pie" />
      <CustomBarChart dataWeek={dataWeek} className="dashboard__bar" />
      <NotesList notes={notes.slice(-3).reverse()} className='dashboard__notes' />
    </div>
  )
}

export default DashBoard