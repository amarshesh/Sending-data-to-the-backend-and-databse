console.log("ehflad");

const totalData = document.querySelector(".blog-area");

let name = document.getElementById("name");
let title = document.getElementById("title");
let date = document.getElementById("date");
let text = document.getElementById("text");

totalData.addEventListener("submit", (e) => {
  e.preventDefault();
  var formdata = {
    name: name.value,
    title: title.value,
    // date: date.value,
    text: text.value,
  };
  // console.log(formdata);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/add");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(`data is send to the backend ${xhr.responseText}`);
  };
  if (xhr.responseText == "sex") {
    alert("data is send ");
  } else alert("no data is send");

  xhr.send(JSON.stringify(formdata));
});
