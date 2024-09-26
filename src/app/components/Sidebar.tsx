import Image from 'next/image';
import React from 'react';
import { NAV_LINKS } from '../../../constants';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; // Accept toggleSidebar as a prop
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 bg-[#1f1f1f] bg-opacity-75 transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div 
        className={`sidebar-content bg-white w-1/2 min-h-screen absolute top-0 right-0 py-3 pl-3 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Image
          src="/close1.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleSidebar} // Use the prop here
        />
        
        {/* Add your sidebar content here */}
        <ul className="flex flex-col h-full gap-10 pt-10 pl-1">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
