const reviewHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#review-title").value.trim();
    const author = document.querySelector("#review-username").value.trim();
    const date = document.querySelector("#review-date").value.trim();
    const comment = document.querySelector("#review-comment").value.trim();
    
      const postResponse = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify({ title, author, date, comment }),
        headers: { "Content-Type": "application/json" },
      });
  
      const getResponse = await fetch("/post", {
        method: "GET",
      });
  
      if (getResponse.ok) {
        document.location.replace("/post");
      } else {
        alert(getResponse.statusText);
      }
    }
  
  // document
  //   .querySelector(".review-form")
    // .addEventListener("submit", reviewHandler);

    document.querySelector(".review-form").addEventListener("submit", reviewHandler)