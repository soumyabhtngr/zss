import { Router } from "@reach/router";
import { TicketList } from './Pages/TicketList';
import { TicketDetail } from './Pages/TicketDetail';
// import { Post } from './Pages/Post'
// import { Header } from './Components/Header';
// import { Navigation } from "./Components/Navigation";
// import './App.css';

function App() {
    return (
        <div className="app">
            {/* <Header /> */}
            {/* <Navigation /> */}
            <Router>
                <TicketList path="/" />
                <TicketDetail path="/:id" />
            </Router>
        </div>
    );
}


export default App;
