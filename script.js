async function country() {
  try {
    let data = await fetch("https://www.gov.uk/bank-holidays.json");

    let res = await data.json();

    let arr = Object.entries(res);

    let h = document.createElement("h2");
    h.innerText = arr[0][0];
    document.getElementById("table").appendChild(h);
    let result = arr[0][1].events;
    document.getElementById("holiday").innerHTML = result
      .map(
        ({ title, date }) =>
          `  
    
<tr>
<td>${date}</td>
<td>${title}</td>
</tr>

`
      )

      .join("");

    let h1 = document.createElement("h2");
    h1.innerText = arr[1][0];
    document.getElementById("table1").appendChild(h1);
    let result1 = arr[1][1].events;
    document.getElementById("holiday1").innerHTML = result1
      .map(
        ({ title, date }) =>
          `  
      
  <tr>
  <td>${date}</td>
  <td>${title}</td>
  </tr>
  
  `
      )

      .join("");
    let h2 = document.createElement("h2");
    h2.innerText = arr[2][0];
    document.getElementById("table2").appendChild(h2);
    let result2 = arr[2][1].events;
    document.getElementById("holiday2").innerHTML = result2
      .map(
        ({ title, date }) =>
          `  
        
    <tr>
    <td>${date}</td>
    <td>${title}</td>
    </tr>
    
    `
      )

      .join("");
  } catch (err) {
    console.error(err);
  }
}
country();
