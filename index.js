// helper function to check if two arrays are identical
function isIdentical(arr1, arr2) {
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
      return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }

  return true;
}

  
  // Handle "Generate New Stations Pair" button click
  const newGameButton = document.getElementById("newGame");
  const stationAElement = document.getElementById("station-a");
  const stationBElement = document.getElementById("station-b");
  let startStation = "Alexanderplatz"; // Replace with your desired start station
  let endStation = "Zoologischer Garten"; // Replace with your desired end station

  newGameButton.addEventListener("click", function () {
      const randomStations = berlinRailNetwork.getRandomStationPair();
      console.log(randomStations);
      stationAElement.textContent = randomStations.from; 
      stationBElement.textContent = randomStations.to; 
      startStation = randomStations.from;
      endStation = randomStations.to;
      // Loop through all <li> elements within the <ul> and remove them
      var liElements = ulPath.getElementsByTagName("li");
      var liArray = Array.from(liElements);
      liArray.forEach(function(li) {
        li.parentNode.removeChild(li);
      });
      while (ulAvailableLines.firstChild) {
        ulAvailableLines.removeChild(ulAvailableLines.firstChild);
      }
      for (var i = 1; i <= 9; i++) {
        // Create a new <li> element
        var li = document.createElement("li");

        // Set the text content of the new <li> element
        li.textContent = "U" + i;

        // Add a class to the <li> element
        li.classList.add("U" + i);

        // Append the new <li> element to the <ul>
        ulAvailableLines.appendChild(li);
    }
      document.body.style.backgroundColor = "#333";
      resultElement.textContent = "";
  });

  // components in page
  const form = document.getElementById("pathForm");
  const resultElement = document.getElementById("result");
  const ulPath = document.getElementById("ubahn-trip");
  const ulAvailableLines = document.getElementById("ubahn-lines");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const liElements = ulPath.querySelectorAll("li");
    const pathArray = [];

    liElements.forEach(li => {
        pathArray.push(li.textContent );
      });

    const quickestPathWithLines = berlinRailNetwork.findQuickestPathWithLines(startStation, endStation);

    const isCorrect = isIdentical(quickestPathWithLines.lines, pathArray);
    if (isCorrect) {
      resultElement.innerHTML = "😃 the path is correct!";
      document.body.style.backgroundColor = "green";
    } else {
      resultElement.innerHTML = "😔 the path is incorrect.";
      document.body.style.backgroundColor = "red";
    }
    resultElement.innerHTML += `<br><b>Quickest path:</b> ${quickestPathWithLines.path.join(" -> ")}`;
    resultElement.innerHTML += `<br><b>Travel time:</b> ${quickestPathWithLines.travelTime}`;
    resultElement.innerHTML += `<br><b>Lines:</b> ${quickestPathWithLines.lines.join(" >> ")}`;
  });


    ulPath.addEventListener("click", (e) => {
      if (e.target && e.target.matches("li")) {
        const li = e.target.cloneNode(true);
        ulAvailableLines.appendChild(li);
        ulPath.removeChild(e.target);
      }
    });

    ulAvailableLines.addEventListener("click", (e) => {
      if (e.target && e.target.matches("li")) {
        const li = e.target.cloneNode(true);
        ulPath.appendChild(li);
        ulAvailableLines.removeChild(e.target);
      }
    });

  // const {from, to} = berlinRailNetwork.getRandomStations();
  // const startStation = from;
  // const endStation = to;
  // console.log("From: ${} -> To: ${}", startStation, endStation);
  // const { path, lines } = berlinRailNetwork.findShortestPathWithLines(startStation, endStation);
  // console.log("Shortest path: ", lines); 
  // const inputLines = ["U2", "U1"];
  
  // const isCorrect = berlinRailNetwork.isPathCorrect(inputLines, startStation, endStation);
  // console.log("Is the path correct?", isCorrect); // It will print true or false
  
  