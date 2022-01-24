function myFunction() {
    var x = document.getElementById("myLinks"); // Put this
    if (x.style.display === "block") {
      x.style.display = "none"; //and this at the bottom of both functions
    } else {
      x.style.display = "block";
    }
  }

  function numbersShow() {
    const num = document.querySelector("#numbers");
    num.style.display = "block";
    
    const letter = document.querySelector("#letters");
    letter.style.display = "none";

    const x = document.getElementById("myLinks");
    x.style.display = "none";
  };

  function lettersShow() {
      const letter = document.querySelector("#letters");
      letter.style.display = "block";

      const num = document.querySelector("#numbers");
      num.style.display = "none";

      const x = document.getElementById("myLinks");
      x.style.display = "none";
  };