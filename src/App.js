import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Monitoring from './components/Monitoring';
import Sidebar from './components/Sidebar';
import Overview from './components/Оverview';
import 'antd/dist/reset.css';


function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '200px', padding: '1px', width: '100%'}}>
                    <Routes>
                        <Route path="/" element={<Overview/>}/>
                        <Route path="/monitoring" element={<Monitoring />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
