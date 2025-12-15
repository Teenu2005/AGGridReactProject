import { AgGridReact } from "ag-grid-react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { gridOptions, addRow, deleteSelected, groupRow, getColumData, exportCSV, refresGrid } from './DynamicGridConfig';
import { loadGrid } from "../../Service/Api";
import { myTheme } from "../../Styles/them";
import StateTable from "./StateTable";
import { AG_GRID_LOCALE_DE, 	AG_GRID_LOCALE_HK } from '@ag-grid-community/locale';

export default function DynamicGrid() {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [gridopt, setGridopt] = useState({ ...gridOptions });
  const [Editable, setEditable] = useState(false);
  const [Theme, setTheme] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});
  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: (params) => Editable && params.colDef.field !== "id",
  }), [columnDefs, Editable]);

  useEffect(() => {
    ThemChange();
  }, []);
  function ThemChange() {
    setTheme(Theme ? false : true);
    document.body.dataset.agThemeMode = Theme ? "dark" : "light";
  }

  //column sizing
  const autoSizeStrategy = useMemo(() => { 
	return {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
        columnLimits: [
            {
                colId: 'country',
                minWidth: 900
            }
        ]
    };
}, []);

  useEffect(() => {
    async function fetchData() {
      const { dynamicColumns, data } = await loadGrid();
      setColumnDefs(dynamicColumns);
      getColumData(dynamicColumns);
      setRowData(data);
    }
    fetchData();
  }, []);

  function handelRowGroup() {
    setColumnDefs(groupRow(columnDefs, selectedColumns));
  }

  // Handle multi-select change
const options = columnDefs?.map(col => ({
  value: col.field,
  label: col.headerName || col.field
}));

const toggleDropdown = () => setOpen(!open);

const handleOptionClick = (value) => {
  const updated = selectedColumns.includes(value)
    ? selectedColumns.filter(v => v !== value)
    : [...selectedColumns, value];

  setSelectedColumns(updated);
};
  //Getting state
  const getState = () => {
    setState(refresGrid());
    console.log(state);
  }
  return (
    <div className="">

  {/* TOP BUTTONS */}
  <div className="top-bar">
    <button className='btn' onClick={ThemChange}>
      {Theme ? "Dark" : "Light"}
    </button>
    <button onClick={getState}>Get State</button>

    <button className='btn' onClick={exportCSV}>
      Export csv
    </button>
  </div>


  {/* CONTROL SECTION */}
  <div className="control-section">

    {/* LEFT SELECT BOX */}
    <div className="select-container">
  <label>Select Columns:</label>

  <div className="custom-select">
    {/* DISPLAY AREA */}
    <div className="custom-select-display" onClick={toggleDropdown}>
      {selectedColumns.length > 0
        ? selectedColumns.join(", ")
        : "Select columns..."}
      <span className="arrow">{open ? "▲" : "▼"}</span>
    </div>

    {/* OPTIONS */}
    {open && (
      <div className="custom-options">
        {options!= undefined && options.map(opt => (
          <div
            key={opt.value}
            className="custom-option"
            onClick={() => handleOptionClick(opt.value)}
          >
            <input
              type="checkbox"
              checked={selectedColumns.includes(opt.value)}
              readOnly
            />{" "}
            {opt.label}
          </div>
        ))}
      </div>
    )}
  </div>
</div>



    {/* CENTER BUTTON */}
    <div className="center-actions">
      <button className="btn" onClick={handelRowGroup}>Row Group</button>
    </div>

    {/* RIGHT ACTION BUTTONS */}
    <div className="right-actions">
      <button className="btn" onClick={() => addRow(rowData.length,columnDefs)}>
        Add Row
      </button>
      <button className="btn" onClick={deleteSelected}>
        Delete selected Row
      </button>
      <button className="btn" onClick={() => setEditable(!Editable)}>
        {Editable ? 'Update' : 'Edit'}
      </button>
    </div>

  </div>


  {/* GRID SECTION */}
  <div className="gridContanier">
    <AgGridReact
      columnDefs={columnDefs}
      rowData={rowData}
      gridOptions={gridopt}
      defaultColDef={defaultColDef}
      theme={myTheme}
      cellSelection={true}
      // popupParent={popupParent}
      enableCharts={true}
      // localeText={AG_GRID_LOCALE_DE}
      // localeText={lang}
      autoSizeStrategy={autoSizeStrategy}
    />
  </div>
  <div><StateTable state={state} />
</div>
</div>

  );
}