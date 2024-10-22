import Chat from "./chat"
function Aside (){
    return (
        <aside className="d-flex flex-column aside-right">
        <form className="d-flex align-items-center mb-3">
          <input
            type="text"
            className="search__input form-control me-2"
            placeholder="Search..."
            aria-label="Search"
          />
          <button type="submit" className="btn btn-link p-0">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="friends-suggestion">
        </div>
        <Chat/>
      </aside>


    )
}
export default Aside ; 