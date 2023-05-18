import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesConfig = () => {
    return (
        <Suspense fallback="Loading...">
            <Router>
                <Routes>
                    <Route exact index path='/' element={''} />
                    <Route path='/cart' element={''} />
                    <Route path='/checkout' element={''} />
                </Routes>
            </Router>
        </Suspense>
    )
}

export default RoutesConfig;