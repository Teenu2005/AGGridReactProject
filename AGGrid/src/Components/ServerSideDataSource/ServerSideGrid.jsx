import React, { useCallback, useMemo, useState,useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { myTheme } from "../../Styles/them";

const createServerSideDatasource = (server) => {
  return {
    getRows: (params) => {
      console.log("[Datasource] - rows requested by grid: ", params.request);
      // get data for request from our fake server
      const response = server.getData(params.request);
      // simulating real server call with a 500ms delay
      setTimeout(() => {
        if (response.success) {
          // supply rows for requested block to grid
          params.success({ rowData: response.rows });
        } else {
          params.fail();
        }
      }, 500);
    },
  };
};

function createFakeServer(allData) {
  return {
    getData: (request) => {
      // in this simplified fake server all rows are contained in an array
      const requestedRows = allData.slice(request.startRow, request.endRow);
      return {
        success: true,
        rows: requestedRows,
      };
    },
  };
}

const ServerDataGrid = () => {
    const [Theme,setTheme] = useState(false);
        useEffect(() => {
          ThemChange();
        }, []);
        function ThemChange() {
          setTheme(Theme ? false : true);
          document.body.dataset.agThemeMode = Theme ? "dark" : "light";
        }
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete", minWidth: 220 },
    { field: "country", minWidth: 200 },
    { field: "year" },
    { field: "sport", minWidth: 200 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: false,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => {
        // setup the fake server with entire dataset
        const fakeServer = createFakeServer(data);
        // create datasource with a reference to the fake server
        const datasource = createServerSideDatasource(fakeServer);
        // register the datasource with the grid
        params.api.setGridOption("serverSideDatasource", datasource);
      });
  }, []);

  return (
    <>
      <div className="gridContanier">
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          theme={myTheme}
          rowModelType={"serverSide"}
          onGridReady={onGridReady}
        />
      </div>
      {/* <div className="request">
        <h3>Server Side Request Log:</h3>
        <div id="request-log"></div>
      </div> */}
    </>
  );
};

export default ServerDataGrid;

