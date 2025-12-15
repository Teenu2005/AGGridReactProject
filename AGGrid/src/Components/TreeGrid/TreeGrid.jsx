import React, { useMemo, useState} from "react";
import { AgGridReact } from "ag-grid-react";
import { getData } from "./data";
import { myTheme } from "../../Styles/them";

const TreeData = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState(getData());
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "modified",
    },
    {
      field: "created",
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Name",
      field: "name",
      cellRendererParams: {
        suppressCount: true,
      },
    };
  }, []);

  return (
      <div className="gridContanier">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          treeData={true}
          theme={myTheme}
          treeDataChildrenField={"children"}
          groupDefaultExpanded={-1}
        />
      </div>
  );
};

export default TreeData;