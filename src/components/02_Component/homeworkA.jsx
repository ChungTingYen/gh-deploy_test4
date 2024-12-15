/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './app.scss';

const TabContent0 = () => <div className="content">Content0</div>;
const TabContent1 = () => <div className="content">Content1</div>;
const TabContent2 = () => <div className="content">Content2</div>;
const BUTTONS = ['Content0','Content1','Content2'];

// const counters = Array.from({ length: 5 });
const counters = Array.from(Array(3).keys())
const Homework = () => {
    const [tabIdx,setTabIdx] = useState(0)
     const AllanComponent = React.useMemo(() => {
         let child = null;
        switch (tabIdx) {
          case 0:
            child = <TabContent0 />;
            break;
          case 1:
            child = <TabContent1 />;
            break;
          default:
            child = <TabContent2 />;
            break;
        }
        console.log('useMemo');
        return child;
       }, [tabIdx]);

  return (
    <section data-name="Homework">
      {BUTTONS.map((item,index)=>{
        return (<button className='button' key={item} data-active={index} 
            onClick={()=>{setTabIdx(index);console.log(index)}}>{item}</button>)
      })}
        {counters.map((item) => AllanComponent)}
    </section>
  );
};
export default Homework;
