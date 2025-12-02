import {data} from '../Db/data'
// import {fetchStudentData} from '../Service/Api'

export const columnDefs = [
    {
        field: "id",
    },
    {
        field: "name",
        editable: true
    },
    {
        field: "category",
        filter: true
    },
    {
        field: "price",
        editable: true
    },
    {
        field: "stock",
        editable: true
    },
    {
        field: "supplier"
    },
    {
        field: "status"
    },
    {
        field: "createdDate"
    }
];

export const gridOptions = {
  rowSelection: {
    mode: "multiRow",   
    checkboxes: true,  
    headerCheckbox: true 
  },
//   onGridReady: function (params) {
//   gridOptions.api = params.api;
//   fetchStudentData();
// }
};

export  const rowData =data;
