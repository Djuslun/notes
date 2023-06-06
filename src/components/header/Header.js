import SearchPanel from "../searh-panel/SearchPanel";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title title">Notes</h1>
      <SearchPanel />
    </header>
  )
}

export default Header;