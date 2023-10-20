import React from 'react';
import './style.css';

import Gerund from './Gerund'


export default function App() {
  return (
    <div className='app'>
      <Gerund itemsPerPage={12} />
    </div>
  );
}
