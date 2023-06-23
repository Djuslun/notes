import { useSelector } from "react-redux"
import { selectAll } from '../../redux/notes.Slice'
import { selectAll as selectAllFilter } from '../../redux/filters.Slice'
import { getLastWeek } from "../../utils/getLastWeek";
import CustomPieChart from "../../components/customPieChart/PieChart";
import CustomBarChart from "../../components/customBarChart/CustomBarChart";
import NotesList from '../../components/notes-list/NotesList'
import EmptyDashBoard from "../../components/emptyDashboard/EmptyDashBoard";
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

  return (<>
    {
      notes.length
        ? <div className="dashboard">
          <h1 className="dashboard__title">{`Total notes: ${notes.length}`}</h1>
          <div className="dashboard__pie">
            <h2 className="dashboard__title">Number of notes by category</h2>
            <CustomPieChart data={data} />
          </div>
          <div className="dashboard__bar">
            <h2 className="dashboard__title">Number of notes by creation date</h2>
            <CustomBarChart dataWeek={dataWeek} className={'dashboard__bar-chart'} />
          </div>
          <div className='dashboard__notes'>
            <h2 className="dashboard__title">Recently added notes</h2>
            <NotesList notes={notes.slice(-3).reverse()} />
          </div>
        </div>
        : <EmptyDashBoard />
    }
  </>
  )
}

export default DashBoard