import { Router } from "@reach/router";
import { TicketList } from './Pages/List/TicketList';
import { TicketDetail } from './Pages/Detail/TicketDetail';

function App() {
    return (
        <div className="app">
            <Router>
                <TicketList path="/" />
                <TicketDetail path="/:id" />
            </Router>
        </div>
    );
}


export default App;
