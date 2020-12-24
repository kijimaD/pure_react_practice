import React, { useState } from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import './App.css';
import { items } from './static-data';

const App = () => {
    const [activeTab, setActiveTab] = useState('items');

    return (
	<div className="App">
	  <Nav
            activeTab={activeTab}
            onTabChange={setActiveTab}/>
	  <main className="App-content">
            <Content />
          </main>
        </div>
    );
};

const Content = ({ tab }) => {
    switch (tab) {
    default:
    case 'items':
        return <ItemPage items={items} />;
    case 'cart':
        return <span>the cart</span>;
    }
};

export default App;
