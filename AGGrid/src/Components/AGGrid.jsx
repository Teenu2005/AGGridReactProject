import React, { useEffect, useMemo,useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import { myTheme } from "../Styles/them";
import Available from '../../public/Avalible.jpeg';
import Low from '../../public/LowStock.png';

import { columnDefs, rowData, gridOptions } from './AGGridFeildConfig';
function AGGrid() {
  const [Theme,setTheme] = useState(false);
  const defaultColDef = useMemo(() => ({
    filter: true
  }), []);
  useEffect(()=>{ThemChange();},[]);
  function ThemChange() {
  setTheme(Theme?false:true);  
  document.body.dataset.agThemeMode= Theme ? "dark" : "light";
}

  return (
    <div className="gridContanier">
      <button className='btn' onClick={ThemChange}>{Theme?"Dark":"Light"}</button>
      <AgGridReact
        theme={myTheme}  
        // theme={themeQuartz}  
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30]}
        columnDefs={columnDefs}
        rowData={rowData}
        gridOptions={gridOptions}
      />
    </div>
  );
}

export default AGGrid;

export function cellComp(params) {
    return <span>${params.value}</span>;
}
export function cellimg(params) {
    const imgSrc = params.value==="Available"?Available:Low;
    return(
    <div className='cellRender'>
    <img src={imgSrc} width='40px' height='40px' alt={params.value}/>
    <p>{params.value}</p>
    </div>
    );
}
