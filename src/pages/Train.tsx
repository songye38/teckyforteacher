import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Train1 from './../trains/Train1';

export default function Train() {

    return (
        <div>
            {/* 상단 슬라이더 */}
            <div style={{ display: 'flex', overflowX: 'auto', padding: 12, borderBottom: '2px solid #ccc' }}>
            </div>


            {/* 하위 라우트 렌더링 */}
            <Routes>
                {/* /collect 접속 시 기본 리다이렉트 혹은 모듈1 렌더 */}
                <Route index element={<Navigate to="learning1" replace />} />
                <Route path="learning1" element={<Train1 />} />
            </Routes>
        </div>
    );
}


