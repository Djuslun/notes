import SearchPanel from "../searh-panel/SearchPanel";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <SearchPanel />
    </div>
  )
}

export default Header;