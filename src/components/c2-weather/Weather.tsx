import React from 'react';
import style from '../c3- history/History.module.css';
import Search from './search/Search';

export default function Weather() {

  return <div className={style.container}>
    <div className={style.item}>
      <Search/>

    </div>
  </div>
}

