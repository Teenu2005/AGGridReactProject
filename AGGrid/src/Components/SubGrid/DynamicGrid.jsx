import { AgGridReact } from "ag-grid-react";
import { useEffect, useState,useMemo } from "react";
import { gridOptions, addRow, deleteSelected } from './DynamicGridConfig';
import { loadGrid } from "../../Service/Api";
import { myTheme } from "../../Styles/them";
export default function DynamicGrid() {
  const [columnDefs, setColumnDefs] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [Theme,setTheme] = useState(false);

    const defaultColDef = useMemo(() => ({
      filter: true,
      editable: (params) => params.colDef.field !== "id",
      
    }), []);

    useEffect(()=>{ThemChange();},[]);
    function ThemChange() {
    setTheme(Theme?false:true);  
    document.body.dataset.agThemeMode= Theme ? "dark" : "light";
  }
  
  useEffect(() => {
    async function fetchData() {
      const { dynamicColumns, data } = await loadGrid();
      setColumnDefs(dynamicColumns);
      setRowData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="gridContanier" style={{ height: 500 }}>
        <button className='btn' onClick={ThemChange}>{Theme?"Dark":"Light"}</button>
      <AgGridReact
        theme={myTheme}
        columnDefs={columnDefs}
        rowData={rowData}
        gridOptions={gridOptions}
        defaultColDef={defaultColDef}
      />
      <div className="btn_group">
        <button className="btn" onClick={()=>{addRow(rowData.length)}}>Add Row</button>
        <button className="btn" onClick={deleteSelected}>Delete selected Row</button>
      </div>
    </div>
  );
}
