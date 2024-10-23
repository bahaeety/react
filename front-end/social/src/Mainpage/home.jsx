import Aside from "./aside";
import Nav from "./nav";

function Home(){
    return (
        <div className="row h-100">
            <div className="col-2 div-nav">
              <header className="App-header">
                <Nav />
              </header>
            </div>
            <div className="col-8">
              <main></main>
            </div>
            <div className="col-2 div-aside">
              <Aside />
            </div>
          </div>
    )
}
export default Home;