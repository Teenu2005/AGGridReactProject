import React, { useEffect, useMemo,useState } from 'react';
import { AgGridReact } from "ag-grid-react";
import { myTheme } from "../Styles/them";
// import { themeQuartz } from "ag-grid-community";
import '../Styles/AGGrid.css';
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
