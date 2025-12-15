import {data} from '../Db/data'
import { cellComp,cellimg } from './AGGrid';

export const columnDefs = [
    {
        field: "id",
        cellRenderer: cellComp
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
        field: "status",
        cellRenderer: cellimg
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
};

export  const rowData =data;
