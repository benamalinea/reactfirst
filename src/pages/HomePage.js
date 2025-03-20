import React from 'react';
import Navigation from '../components/Navigation';
import ProductDisplay from '../components/ProductDisplay';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <ProductDisplay />
            <Footer />
        </div>
    );
};

export default HomePage;
