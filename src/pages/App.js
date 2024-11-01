import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Main from './Main';

function App() {
return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/BY-Soldout" element={<Main/>} />
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;
