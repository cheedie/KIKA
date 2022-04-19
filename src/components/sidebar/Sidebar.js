import React from 'react';
import SidebarOption from './SidebarOption';
import '../../styles/sidebar/sidebar.scss';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h3>Sort by</h3>   
      <SidebarOption title="Gender"/>
      <SidebarOption title="Size"/>
      <SidebarOption title="Grade"/>
      <SidebarOption title="Color"/>
      <SidebarOption title="Type"/>
      <SidebarOption title="Vendor"/>
      <SidebarOption title="Price"/>
      <button>Sort</button>

    </section>
  );
};

export default Sidebar;
