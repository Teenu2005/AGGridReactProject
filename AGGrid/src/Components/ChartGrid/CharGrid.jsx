import { useFetchJson } from "./useFetchJson";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState, useCallback, useEffect } from "react";
import { myTheme } from "../../Styles/them";
const ChartGrid = () => {
    const [Theme, setTheme] = useState(false);
    useEffect(() => {
      ThemChange();
    }, []);
    function ThemChange() {
      setTheme(Theme ? false : true);
      document.body.dataset.agThemeMode = Theme ? "dark" : "light";
    }

  const [columnDefs, setColumnDefs] = useState([
    // group cell renderer needed for expand / collapse icons
    { field: "name", cellRenderer: "agGroupCellRenderer" },
    { field: "account" },
    { field: "calls" },
    { field: "minutes", valueFormatter: "x.toLocaleString() + 'm'" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  const detailCellRendererParams = useMemo(() => {
    return {
      detailGridOptions: {
        columnDefs: [
          { field: "callId" },
          { field: "direction" },
          { field: "number", minWidth: 150 },
          { field: "duration", valueFormatter: "x.toLocaleString() + 's'" },
          { field: "switchCode", minWidth: 150 },
        ],
        defaultColDef: {
          flex: 1,
        },
      },
      getDetailRowData: (params) => {
        params.successCallback(params.data.callRecords);
      },
    };
  }, []);

  const { data, loading } = useFetchJson(
    "https://www.ag-grid.com/example-assets/master-detail-data.json",
  );

  const onFirstDataRendered = useCallback((params) => {
    // arbitrarily expand a row for presentational purposes
    setTimeout(() => {
      params.api.getDisplayedRowAtIndex(1).setExpanded(true);
    }, 0);
  }, []);

  return (
      <div className="gridContanier">
        <AgGridReact
          theme={myTheme}
          rowData={data}
          cellSelection={true}
          enableCharts={true}
          loading={loading}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          masterDetail={true}
          detailCellRendererParams={detailCellRendererParams}
          onFirstDataRendered={onFirstDataRendered}
        />
      </div>
  );
};

export default ChartGrid;