  // Handle "Generate New Stations Pair" button click
  const generatePairButton = document.getElementById("generatePair");
  const stationAElement = document.getElementById("station-a");
  const stationBElement = document.getElementById("station-b");
  let startStation = "Alexanderplatz"; // Replace with your desired start station
  let endStation = "Zoologischer Garten"; // Replace with your desired end station

  generatePairButton.addEventListener("click", function () {
      const randomStations = berlinRailNetwork.getRandomStations();
      console.log(randomStations);
      stationAElement.textContent = randomStations.from; 
      stationBElement.textContent = randomStations.to; 
  });

  // Handle form submission
  const form = document.getElementById("pathForm");
  const resultElement = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const ulPath = document.getElementById("ubahn-trip");

    const liElements = ulPath.querySelectorAll("li");
    const pathArray = [];

    liElements.forEach(li => {
        pathArray.push({ text: li.textContent });
      });

    const isCorrect = berlinRailNetwork.isPathCorrect(pathArray, startStation, endStation);

    if (isCorrect) {
      resultElement.textContent = "The path is correct!";
      document.body.style.backgroundColor = "#559933";
    } else {
      resultElement.textContent = "The path is incorrect.";
      document.body.style.backgroundColor = "#995533";
    }
  });

    const ulPath = document.getElementById("ubahn-trip");
    const ulAvailableLines = document.getElementById("ubahn-lines");

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
  
  