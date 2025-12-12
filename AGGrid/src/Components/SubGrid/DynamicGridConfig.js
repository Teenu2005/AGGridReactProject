let columnDefs = [];
var editTable = true;
var groupTable = true;
export function getColumData(data) {
      columnDefs = data;
}
export const gridOptions = {
  pagination: true,
  paginationPageSize: 10,
  paginationPageSizeSelector: [10, 20, 30],
  rowSelection: 
  // {
    // mode: "multiRow",   
    // checkboxes: true,  
    // headerCheckbox: true
  // },
  "multiple",
  // Enable row dragging
  rowDragMultiRow: true,
  rowDragEntireRow: true,
  rowDragManaged: true,   
  animateRows: true,     
  onGridReady: function (params) {
    gridOptions.api = params.api;
  },

  onCellValueChanged: function (params) {
    console.log("Updated Row:", params.data);
  },

  //Enterprise features can be added here
  rowNumbers: true,
    // //Colum Side bar
    // sideBar: 'columns',
    // //Row Grouping
    // rowGroupPanelShow: 'always',
};

export function addRow(totalRows) {
  const newRow = {
    id: totalRows + 1,
    name: "New Student",
    username: "newuser",
    email: "new@gmail.com",
    phone: "9999999999",
    address_city: "Chennai"
  };
  gridOptions.api.applyTransaction(
    { add: [newRow] },
    (res) => {
      const addedRowNode = res.add[0];
        console.log('Added Row:', addedRowNode.data);
      gridOptions.api.startEditingCell({
        rowIndex: addedRowNode.rowIndex,
        colKey: "name",
      });
    }
  );
}


export function deleteSelected() {
  const selectedRows = gridOptions.api.getSelectedRows();

  if (selectedRows.length === 0) {
    alert("Please select at least one row to delete.");
    return;
  }

  gridOptions.api.applyTransaction({
    remove: selectedRows
  });
}

// Function to group rows by a specific column (e.g., 'company')
export function groupRow(colDef,selectedColumns) {
  if(!editTable){
    // gridOptions.api.setRowGroupColumns(['']);
    console.log("colDef",colDef);
    gridOptions.api.updateGridOptions({
      rowGroupPanelShow: "never",
      sideBar: false,
    });
    editTable = true;
    return colDef;
  }
  else{
    // gridOptions.api.applyColumnState({ state: [{ colId: 'country', rowGroup: true, enableRowGroup: true }] });
    selectedColumns.forEach(element => {
      gridOptions.api.applyColumnState({ state: [{ colId:element, rowGroup: true, enableRowGroup: true }] });
    });
    colDef.forEach(column => {
    gridOptions.api.applyColumnState({ state: [{ colId:column.field, enableRowGroup: true }] });
  });
    gridOptions.api.updateGridOptions({
      rowGroupPanelShow: "never",
      sideBar: true,
});
    editTable = false;
  }
  return colDef;
}

export const exportCSV = () => {
  gridOptions.api.exportDataAsCsv({
    fileName: "my_data.csv",
    allColumns: true, 
    columnSeparator: ",",
  });
};