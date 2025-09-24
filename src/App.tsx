import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '@/components/pages/home';
import Experience from '@/components/pages/experience';

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/experience" element={<Experience />}></Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
