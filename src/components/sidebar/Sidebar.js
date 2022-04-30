import React from 'react';
import SidebarOption from './SidebarOption';
import '../../styles/sidebar/sidebar.scss';

const Sidebar = () => {
  return (
    <section className="sidebar__container">
      <h3>Sort by</h3>   
      <SidebarOption/>
      <button>Sort</button>
    </section>
  );
};

export default Sidebar;
