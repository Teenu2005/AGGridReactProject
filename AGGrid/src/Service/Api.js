export default function fetchStudentData() {
  const data = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("Student Data:", data);
      gridOptions.api.setRowData(data); 
    })
    .catch(error => {
      console.error("Fetch Error:", error);
    });
    console.log(data)
}
