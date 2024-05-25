import React from 'react'
import Landing from '../../components/home/landing/Landing'
import StoreInfo from '../../components/home/storeInfo/StoreInfo';
import SpecialDishes from '../../components/home/specialDishes/SpecialDishes';
import Dish_For_Discount from '../../components/home/dish-for-discount/Dish_For_Discount';
import Images_For_Events from '../../components/home/images-for-events/Images_For_Events';
import For_Event from '../../components/home/for-event/For_Event';
import Choose_Our_Food from '../../components/home/choose-our-food/Choose_Our_Food';
import Our_customers_comments from '../../components/home/our-customers-comments/Our_customers_comments';
import News_letter from '../../components/home/Newsletter/News_letter';
import Top_dishe from '../../components/menu/top-dishe/Top_dishe';

const Home = () => {
  return (
    <>
      <Landing />
      <StoreInfo />
      <SpecialDishes />
      <Top_dishe />
      <Dish_For_Discount />
      <Images_For_Events />
      <For_Event />
      <Choose_Our_Food />
      <Our_customers_comments />
      <News_letter />
    </>
  );
}

export default Home
