const reviewHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#review-title").value.trim();
  const author = document.querySelector("#review-username").value.trim();
  const date = document.querySelector("#review-date").value.trim();
  const comment = document.querySelector("#review-comment").value.trim();
  const barName = JSON.parse(localStorage.getItem("barName")).toString() ?? [];
  const barAddress = JSON.parse(localStorage.getItem("bars")).toString() ?? [];

  //const locations = "Testing";;
  //remove the aquare bracket beginning & ending of the array
  // const barNames = barName.split(",");
  // const barAddresses = barAddress.split(/,(?= \d{2} )/);


  const postResponse = await fetch("/api/blog", {
    method: "POST",
    body: JSON.stringify({ title, author, date, comment, barName, barAddress }),
    headers: { "Content-Type": "application/json" },
  });

  const getResponse = await fetch("/post", {
    method: "GET",
  });

  if (getResponse.ok) {
    await document.location.replace("/post")
   
  } else {
    alert(getResponse.statusText);
  }
};

// document
//   .querySelector(".review-form")
// .addEventListener("submit", reviewHandler);

document
  .querySelector(".review-form")
  .addEventListener("submit", reviewHandler);
