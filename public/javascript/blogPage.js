const barNameArray = JSON.parse(localStorage.getItem("barName")) ?? [];
  const barAddressArray = JSON.parse(localStorage.getItem("bars")) ?? [];
  const asdf = document.querySelector(".barBtn");

barNameArray.forEach((bar, i) => {
    let newBtn = document.createElement("button");
    newBtn.textContent = bar;
    newBtn.setAttribute("id", "cardEl");
    newBtn.setAttribute("data-value", barAddressArray[i]);
    newBtn.setAttribute("class", "button success expanded");
    newBtn.setAttribute("onclick", "removeBtn()");
    console.log(newBtn)
    console.log(typeof asdf)
    asdf.appendChild(newBtn);
  });