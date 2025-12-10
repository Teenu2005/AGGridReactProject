 export async function loadGrid() {
    const response = await fetch("https://json-placeholder.mock.beeceptor.com/users");
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const dynamicColumns = Object.keys(data[0]).map(key => ({
      field: key,
    }));
    // data.map(item => {
    //   item.address = `${item.address.suite} ,
    //   ${item.address.street} ,
    //   ${item.address.city}, 
    //   ${item.zipcode}`;
    //   item.company = item.company.name; 
    //   return item;});
    // console.log();
    // console.log(data);
    return { dynamicColumns, data };
  }