import React, {useState} from 'react';
import './style.css';

const gerunds = require('english-verbs-gerunds/dist/gerunds.json');
const gerundsArray = Object.entries(gerunds);

export default function Gerund({itemsPerPage = 3}) {
const [inputValue, setInputValue] = useState('');

const handleInput = (e) => {
  const key = e.target.value;
  // const gerund = gerunds[key];

 

  const foundGerunds = gerundsArray.filter(([infinitive, ger]) => {
    if (gerunds[key]) {return false}
return infinitive.includes(key);
  })

if (gerunds[key]) {
  foundGerunds.unshift([key, gerunds[key]]);
}

foundGerunds.length = itemsPerPage;
  const listToRender = foundGerunds.map((arr, index) => {
    return (<p key={index}> {arr.join(' - ')} </p>);
  })
  setInputValue(listToRender)
  // setInputValue(`${key} : ${gerund}`  || '...')
}

  return (
    <div className='gerund-main-wrapper'>
      <div className="gerunds-wrapper">{inputValue}</div>
      <input className='gerund-input' onInput={handleInput} placeholder={'type infinitive...'} type="text"></input>
    </div>
  );
}
