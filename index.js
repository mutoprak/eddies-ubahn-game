const berlinRailNetwork = {
    stations: new Set([
        "Uhlandstrasse",
        "Warschauer Strasse",
        "Pankow",
        "Ruhleben",
        "Krumme Lanke",
        "Innsbrucker Platz",
        "Nollendorfplatz",    
        "Hauptbahnhof",
        "Hoenow",
        "Alt-Mariendorf",
        "Alt-Tegel",
        "Rudow",
        "Rathaus Spandau",
        "Hermannplatz",
        "Wittenau",
        "Osloer Strasse",
        "Rathaus Steglitz",
        "Alexanderplatz",
        "Kottbusser Tor",
        "Zoologischer Garten",
        "Fehrbelliner Platz",
        "Spichernstrasse",
        "Wittenberplatz",
        "Gleisdreieck",
        "Möckernbrücke",
        "Hallesches Tor",
        "Mehringdamm",
        "Bayerischer Platz",
        "Leopoldplatz",
        "Unter den Linden",
        "Stadtmitte",
        "Berliner Strasse",
        "Bismarckstrasse",
        "Kurfuerstendamm"
    ]),
    connections: {
        "Uhlandstrasse": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 1 },
            { station: "Gleisdreieck", line: "U1", travelTime: 5 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 3 },
            { station: "Wittenbergplatz", line: "U1", travelTime: 2 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 6 },
            { station: "Hallesches Tor", line: "U1", travelTime: 7 },
            { station: "Kottbusser Tor", line: "U1", travelTime:9 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 12 },
          ],
          "Warschauer Strasse": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 11 },
            { station: "Gleisdreieck", line: "U1", travelTime: 7 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 9 },
            { station: "Wittenbergplatz", line: "U1", travelTime: 10 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 6 },
            { station: "Hallesches Tor", line: "U1", travelTime: 5 },
            { station: "Kottbusser Tor", line: "U1", travelTime:3 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 12 },
            { station: "Gleisdreieck", line: "U3", travelTime: 7 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 9 },
            { station: "Wittenbergplatz", line: "U3", travelTime: 10 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 6 },
            { station: "Hallesches Tor", line: "U3", travelTime: 5 },
            { station: "Kottbusser Tor", line: "U3", travelTime:3 },
            { station: "Spichernstrasse", line: "U3", travelTime: 12 },
            { station: "Fehrbellinerplatz", line: "U3", travelTime: 14 },
            { station: "Krumme Lanke", line: "U3", travelTime: 23 },
          ],
      "Alexanderplatz": [
        { station: "Kottbusser Tor", line: "U8", travelTime: 4 },
        { station: "Hermannplatz", line: "U8", travelTime: 6 },
        { station: "Hermannstrasse", line: "U8", travelTime: 9 },
        { station: "Osloer Strasse", line: "U8", travelTime: 7 },
        { station: "Wittenau", line: "U8", travelTime: 14 },
        { station: "Hoenow", line: "U5", travelTime: 19 },
        { station: "Unter den Linden", line: "U5", travelTime: 3 },
        { station: "Hauptbahnhof", line: "U5", travelTime: 6 },
        { station: "Pankow", line: "U2", travelTime: 6 },
        { station: "Stadtmitte", line: "U2", travelTime: 5 },
        { station: "Gleisdreieck", line: "U2", travelTime: 5 },
        { station: "Nollendorf Platz", line: "U2", travelTime: 7 },
        { station: "Wittenberg Platz", line: "U2", travelTime: 8 },
        { station: "Zoologischer Garten", line: "U2", travelTime: 13 },
        { station: "Bismarck Strasse", line: "U2", travelTime: 16 },
        { station: "Ruhleben", line: "U2", travelTime: 22 },
      ],
      "Kottbusser Tor": [
        { station: "Gleisdreieck", line: "U1", travelTime: 15 }
      ],
      "Zoologischer Garten": [
        { station: "Friedrichstraße", line: "U1", travelTime: 15 }
      ]
    },
  
    findShortestPathWithLines(startStation, endStation) {
        const stations = berlinRailNetwork.stations;
        const connections = berlinRailNetwork.connections;
      
        const queue = new Set(stations);
        const distances = {};
        const previous = {};
        const lines = {};
      
        for (const station of stations) {
          distances[station] = Infinity;
          previous[station] = null;
          lines[station] = [];
        }
      
        distances[startStation] = 0;
      
        while (queue.size > 0) {
          let closestStation = null;
          for (const station of queue) {
            if (!closestStation || distances[station] < distances[closestStation]) {
              closestStation = station;
            }
          }
      
          if (closestStation === endStation) {
            const path = [];
            let currentStation = closestStation;
            while (currentStation) {
              path.push(currentStation);
              currentStation = previous[currentStation];
            }
            path.reverse();
            return { path, lines: lines[endStation] };
          }
      
          queue.delete(closestStation);
      
          const stationConnections = connections[closestStation] || [];
          for (const connection of stationConnections) {
            const alt = distances[closestStation] + connection.travelTime;
            if (alt < distances[connection.station]) {
              distances[connection.station] = alt;
              previous[connection.station] = closestStation;
              lines[connection.station] = [...lines[closestStation], connection.line];
            }
          }
        }
      
        return { path: [], lines: [] }; // No path found
      },

      isPathCorrect(path, startStation, endStation) {
        const shortestPath = berlinRailNetwork.findShortestPathWithLines(startStation, endStation);
      
        if (shortestPath.length === 0) {
          return false; // No valid path exists
        }
      
        for (let i = 0; i < shortestPath.length - 1; i++) {
          const currentStation = shortestPath[i];
          const nextStation = shortestPath[i + 1];
      
          const connection = berlinRailNetwork.connections[currentStation].find(
            connection => connection.station === nextStation
          );
      
          if (!connection) {
            return false; // The path contains an incorrect connection
          }
      
          if (!path.includes(connection.line)) {
            return false; // The path is missing a required line
          }
        }
      
        return true; // The path is correct
      },

      getRandomStations() {
        const stationsArray = Array.from(berlinRailNetwork.stations);
        const fromIndex = Math.floor(Math.random() * stationsArray.length);
        let toIndex = fromIndex;
      
        while (toIndex === fromIndex) {
          toIndex = Math.floor(Math.random() * stationsArray.length);
        }
      
        const fromStation = stationsArray[fromIndex];
        const toStation = stationsArray[toIndex];
      
        return { from: fromStation, to: toStation };
      },
  };

  // Handle "Generate New Stations Pair" button click
  const generatePairButton = document.getElementById("generatePair");
  const stationPairElement = document.getElementById("stationPair");
  const startStation = "Alexanderplatz"; // Replace with your desired start station
  const endStation = "Zoologischer Garten"; // Replace with your desired end station

  generatePairButton.addEventListener("click", function () {
      document.getElementById("pathInput").value = "";
      const randomStations = berlinRailNetwork.getRandomStations();
      console.log(randomStations);
      const startStation = randomStations.from; // Replace with your desired start station
      const endStation = randomStations.to; // Replace with your desired end station
      stationPairElement.textContent = `From: ${startStation}, To: ${endStation}`;
  });

  // Handle form submission
  const form = document.getElementById("pathForm");
  const resultElement = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const pathInput = document.getElementById("pathInput").value;
    const pathArray = pathInput.split(",").map(item => item.trim());

    const isCorrect = berlinRailNetwork.isPathCorrect(pathArray, startStation, endStation, berlinRailNetwork);

    if (isCorrect) {
      resultElement.textContent = "The path is correct!";
    } else {
      resultElement.textContent = "The path is incorrect.";
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
  
  