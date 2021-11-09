import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
import TinderCards from './Components/TinderCards';




function App() {
    return (
        <div className="App">

            {/* Header */}
            <Header />

            {/* TinderCards */}
            <TinderCards />

            {/* Swipe Buttons */}
            <SwipeButtons />
        </div>
    );
}

export default App;
