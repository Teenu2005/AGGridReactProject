import { themeQuartz, colorSchemeDark } from "ag-grid-community";
const DarkThem ={
  browserColorScheme: 'dark',

  // Header
  headerBackgroundColor: "#020617",
  headerForegroundColor: "#e5e7eb",
  headerColumnBorder: true,

  // Rows
  rowHoverColor: "#1e293b",
  selectedRowBackgroundColor: "#312e81",
  oddRowBackgroundColor: "#020617",

  // Grid lines
  borderColor: "#1e293b",

  // Text
  fontSize: "0.95rem",
  foregroundColor: "#f1f5f9",
  secondaryForegroundColor: "#94a3b8",

  // Spacing
  rowHeight: "3rem",
  headerHeight: "3.25rem",
  listItemHeight: "2.2rem",

  // Inputs
  inputFocusBorderColor: "#818cf8",
};

const LightThem ={ 
  browserColorScheme: 'light',

  //Header (clean, modern)
  headerBackgroundColor: "#f1f5f9",   
  headerForegroundColor: "#0f172a",   
  headerColumnBorder: true,

  //Rows
  rowHoverColor: "#e0e7ff",          
  selectedRowBackgroundColor: "#c7d2fe", 
  oddRowBackgroundColor: "#ffffff",

  //Grid Lines
  borderColor: "#e5e7eb",

  //Text
  fontSize: "1rem",
  foregroundColor: "#020617",
  secondaryForegroundColor: "#475569",

  //Spacing (your original sizing, slightly refined)
  rowHeight: "3rem",
  headerHeight: "3.3rem",
  listItemHeight: "2.2rem",

  //Inputs & Focus
  inputFocusBorderColor: "#6366f1",}


export const myTheme = themeQuartz.withParams(LightThem,'light').withParams(DarkThem,"dark");