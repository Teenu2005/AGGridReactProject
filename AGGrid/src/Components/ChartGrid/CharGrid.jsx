import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import useFetchJson from "../../Hooks/useFetchJson";

export default ChartGrid = () => {
  const gridRef = useRef(null);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    // different ways to define 'categories'
    { field: "athlete", width: 150, chartDataType: "category" },
    { field: "age", chartDataType: "category", sort: "asc" },
    { field: "sport" }, // inferred as category by grid
    // excludes year from charts
    { field: "year", chartDataType: "excluded" },
    // different ways to define 'series'
    { field: "gold", chartDataType: "series" },
    { field: "silver", chartDataType: "series" },
    { field: "bronze" }, // inferred as series by grid
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  const popupParent = useMemo(() => {
    return document.body;
  }, []);
  const chartThemeOverrides = useMemo(() => {
    return {
      common: {
        title: {
          enabled: true,
          text: "Medals by Age",
        },
      },
      bar: {
        axes: {
          category: {
            label: {
              rotation: 0,
            },
          },
        },
      },
    };
  }, []);

  const { data, loading } = useFetchJson(
    "https://www.ag-grid.com/example-assets/wide-spread-of-sports.json",
  );

  const onFirstDataRendered = useCallback((params) => {
    params.api.createRangeChart({
      chartContainer: document.querySelector("#myChart"),
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 79,
        columns: ["age", "gold", "silver", "bronze"],
      },
      chartType: "groupedColumn",
      aggFunc: "sum",
    });
  }, []);

  return (
    <div style={containerStyle}>
      <div className="wrapper">
        <div style={gridStyle} className="my-grid">
          <AgGridReact
            ref={gridRef}
            rowData={data}
            loading={loading}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            cellSelection={true}
            popupParent={popupParent}
            enableCharts={true}
            chartThemeOverrides={chartThemeOverrides}
            onFirstDataRendered={onFirstDataRendered}
          />
        </div>
        <div id="myChart" className="my-chart"></div>
      </div>
    </div>
  );
};
