
export const gridOptions = {
  // pagination: true,
  // paginationPageSize: 10,
  // paginationPageSizeSelector: [10, 20, 30],
  rowSelection: {
    mode: "multiRow",   
    checkboxes: true,  
    headerCheckbox: true
  },
  rowDragMultiRow: true,
  rowDragEntireRow: true,
  rowDragManaged: true,   
  animateRows: true,     
  onGridReady: function (params) {
    console.log(params)
    gridOptions.api = params.api;
  },

  onCellValueChanged: function (params) {
    console.log("Updated Row:", params.data);
  }

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
