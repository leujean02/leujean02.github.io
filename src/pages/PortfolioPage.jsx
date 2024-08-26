import React from 'react';
import Footer from '../components/Footer';
import MyPortfolio from '../components/MyPortfolio';
import MyPublications from '../components/MyPublications';

function PortfolioPage() {
  return (
    <div>
      <MyPortfolio />
      <MyPublications />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
