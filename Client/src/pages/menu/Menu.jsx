import React from 'react'
import Explore_Our_Menu from '../../components/menu/Explore_Our_Menu/Explore_Our_Menu'
import Top_dishe from '../../components/menu/top-dishe/Top_dishe';
import Breakfast from '../../components/menu/breakfast/Breakfast';
import Lunch from '../../components/menu/lunch/Lunch';
import Dinner from '../../components/menu/dinner/Dinner';

const Menu = () => {
  return (
    <>
      <Explore_Our_Menu />
      <Top_dishe />
      <Breakfast />
      <Lunch />
      <Dinner />
    </>
  );
}

export default Menu
