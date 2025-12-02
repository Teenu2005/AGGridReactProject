import {data} from '../Db/data'
<<<<<<< HEAD
=======
// import {fetchStudentData} from '../Service/Api'
>>>>>>> 484b8ec4ed65b3407aed6b24970081e9d48b6b45

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
<<<<<<< HEAD
=======
//   onGridReady: function (params) {
//   gridOptions.api = params.api;
//   fetchStudentData();
// }
>>>>>>> 484b8ec4ed65b3407aed6b24970081e9d48b6b45
};

export  const rowData =data;
