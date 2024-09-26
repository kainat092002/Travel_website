// src/app/components/SidebarClient.tsx
"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './navbar'; // Import Navbar

interface SidebarClientProps {
    children: React.ReactNode; // Expects children as React nodes
}

const SidebarClient: React.FC<SidebarClientProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} /> {/* Pass the prop here */}
            {children} {/* Render children */}
        </>
    );
};

export default SidebarClient;
