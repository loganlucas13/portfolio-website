import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/components/pages/home';
import Experience from '@/components/pages/experience';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/experience" element={<Experience />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
