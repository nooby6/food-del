import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
import { useState } from 'react';

const Home = () => {

    const [category,setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
