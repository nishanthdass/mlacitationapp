import React, { useState } from 'react';
import './App.css'


export default function FormatBtn(props) {
  return (
    <>
    <select className='select-format' id="select-format-id"> 
    <option value="mla">MLA</option>
    <option value="apa">APA</option>
    <option value="chicago">Chicago</option>
    </select>
    </>
    );
  };
  