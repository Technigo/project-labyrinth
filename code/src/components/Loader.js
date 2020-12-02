import React from 'react';
import { useSelector } from 'react-redux';
import './Loader.css';

const Loader = () => {
  const loader = useSelector((state) => state.game.isLoading);
  return (
    <> {
      loader && (
        <section className="loader-background">
          <div class="loader"></div>
        </section> 
      )
    }
    </>
  )
}

export default Loader;