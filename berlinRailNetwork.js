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
        "Hermannstrasse",
        "Wittenau",
        "Osloer Strasse",
        "Rathaus Steglitz",
        "Alexanderplatz",
        "Kottbusser Tor",
        "Hermannplatz",
        "Zoologischer Garten",
        "Fehrbelliner Platz",
        "Spichernstrasse",
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
    lines: new Map([
        ["U1", [
            "Uhlandstrasse",
            "Warschauer Strasse",
            "Kurfuerstendamm",
            "Nollendorfplatz",
            "Moeckernbruecke",
            "Hallesches Tor",
            "Kottbusser Tor",
            "Gleisdreieck",
        ]],
        ["U2", [
            "Pankow",
            "Ruhleben",
            "Zoologischer Garten",
            "Alexanderplatz",
            "Stadtmitte",
            "Gleisdreieck",
            "Nollendorfplatz",
            "Bismarckstrasse",
        ]],
        ["U3", [
            "Krumme Lanke",
            "Warschauer Strasse",
            "Nollendorfplatz",
            "Moeckernbruecke",
            "Hallesches Tor",
            "Kottbusser Tor",
            "Gleisdreieck",
            "Fehrbellinerplatz",
            "Spichernstrasse",
        ]],
        ["U4", [
            "Nollendorfplatz",
            "Innsbrucker Platz",
            "Bayerischer Platz",
        ]],
        ["U5", [
            "Hauptbahnhof",
            "Hoenow",
            "Alexanderplatz",
            "Unter den Linden",
        ]],
        ["U6", [
            "Alt-Mariendorf",
            "Alt-Tegel",
            "Leopoldplatz",
            "Stadtmitte",
            "Unter den Linden",
            "Mehringdamm",
        ]],
        ["U7", [
            "Rudow",
            "Rathaus Spandau",
            "Mehringdamm",
            "Hermannplatz",
            "Moeckernbruecke",
            "Bayerischer Platz",
            "Berliner Strasse",
            "Fehrbellinerplatz",
            "Bismarckstrasse",]],
        ["U8", [
            "Hermannstrasse",
            "Wittenau",
            "Osloer Strasse",
            "Alexanderplatz",
            "Hermannplatz",
            "Kottbusser Tor",
        ]],
        ["U9", [
            "Osloer Strasse",
            "Rathaus Steglitz",
            "Berliner Strasse",
            "Spichernstrasse",
            "Zoologischer Garten",
            "Kurfuerstendamm",
            "Leopoldplatz",
        ]],

    ]),
    connections: {
        "Uhlandstrasse": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 1 },
            { station: "Gleisdreieck", line: "U1", travelTime: 5 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 3 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 6 },
            { station: "Hallesches Tor", line: "U1", travelTime: 7 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 9 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 12 },
        ],
        "Warschauer Strasse": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 11 },
            { station: "Gleisdreieck", line: "U1", travelTime: 7 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 9 },
            { station: "Wittenbergplatz", line: "U1", travelTime: 10 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 6 },
            { station: "Hallesches Tor", line: "U1", travelTime: 5 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 3 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 12 },
            { station: "Gleisdreieck", line: "U3", travelTime: 7 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 9 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 6 },
            { station: "Hallesches Tor", line: "U3", travelTime: 5 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 3 },
            { station: "Spichernstrasse", line: "U3", travelTime: 12 },
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 14 },
            { station: "Krumme Lanke", line: "U3", travelTime: 23 },
        ],
        "Pankow": [
            { station: "Alexanderplatz", line: "U2", travelTime: 6 },
            { station: "Stadtmitte", line: "U2", travelTime: 11 },
            { station: "Gleisdreieck", line: "U2", travelTime: 15 },
            { station: "Nollendorfplatz", line: "U2", travelTime: 17 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 19 },
            { station: "Bismarckstrasse", line: "U2", travelTime: 22 },
            { station: "Ruhleben", line: "U2", travelTime: 28 },
        ],
        "Ruhleben": [
            { station: "Bismarckstrasse", line: "U2", travelTime: 6 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 9 },
            { station: "Nollendorfplatz", line: "U2", travelTime: 11 },
            { station: "Gleisdreieck", line: "U2", travelTime: 13 },
            { station: "Stadtmitte", line: "U2", travelTime: 17 },
            { station: "Alexanderplatz", line: "U2", travelTime: 22 },
            { station: "Pankow", line: "U2", travelTime: 28 },
        ],
        "Krumme Lanke": [
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 9 },
            { station: "Spichernstrasse", line: "U3", travelTime: 11 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 14 },
            { station: "Gleisdreieck", line: "U3", travelTime: 16 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 17 },
            { station: "Hallesches Tor", line: "U3", travelTime: 18 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 20 },
            { station: "Waschauer Strasse", line: "U3", travelTime: 23 }
        ],
        "Innsbrucker Platz": [
            { station: "Bayerischer Platz", line: "U4", travelTime: 2 },
            { station: "Nollendorfplatz", line: "U4", travelTime: 4 },
        ],
        "Nollendorfplatz": [
            { station: "Bayerischer Platz", line: "U4", travelTime: 2 },
            { station: "Innsbrucker Platz", line: "U4", travelTime: 4 },
            { station: "Gleisdreieck", line: "U3", travelTime: 2 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 3 },
            { station: "Spichernstrasse", line: "U3", travelTime: 3 },
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 5 },
            { station: "Hallesches Tor", line: "U3", travelTime: 4 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 6 },
            { station: "Waschauer Strasse", line: "U3", travelTime: 9 },
            { station: "Krumme Lanke", line: "U3", travelTime: 14 },
            { station: "Bismarckstrasse", line: "U2", travelTime: 5 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 2 },
            { station: "Ruhleben", line: "U2", travelTime: 11 },
            { station: "Gleisdreieck", line: "U2", travelTime: 2 },
            { station: "Stadtmitte", line: "U2", travelTime: 6 },
            { station: "Alexanderplatz", line: "U2", travelTime: 11 },
            { station: "Pankow", line: "U2", travelTime: 17 },
            { station: "Kurfuerstendamm", line: "U1", travelTime: 2 },
            { station: "Gleisdreieck", line: "U1", travelTime: 2 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 3 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 3 },
            { station: "Hallesches Tor", line: "U1", travelTime: 4 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 6 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 9 },
        ],
        "Hauptbahnhof": [
            { station: "Hoenow", line: "U5", travelTime: 25 },
            { station: "Unter den Linden", line: "U5", travelTime: 3 },
            { station: "Alexanderplatz", line: "U5", travelTime: 6 }
        ],
        "Hoenow": [
            { station: "Hauptbahnhof", line: "U5", travelTime: 25 },
            { station: "Unter den Linden", line: "U5", travelTime: 22 },
            { station: "Alexanderplatz", line: "U5", travelTime: 19 }],
        "Alt-Mariendorf": [
            { station: "Mehringdamm", line: "U6", travelTime: 8 },
            { station: "Hallesches Tor", line: "U6", travelTime: 9 },
            { station: "Stadtmitte", line: "U6", travelTime: 11 },
            { station: "Unter den Linden", line: "U6", travelTime: 12 },
            { station: "Leopoldplatz", line: "U6", travelTime: 19 },
            { station: "Alt-Tegel", line: "U6", travelTime: 28 }
        ],
        "Alt-Tegel": [
            { station: "Mehringdamm", line: "U6", travelTime: 20 },
            { station: "Hallesches Tor", line: "U6", travelTime: 19 },
            { station: "Stadtmitte", line: "U6", travelTime: 17 },
            { station: "Unter den Linden", line: "U6", travelTime: 16 },
            { station: "Leopoldplatz", line: "U6", travelTime: 9 },
            { station: "Alt-Mariendorf", line: "U6", travelTime: 28 }
        ],
        "Rudow": [
            { station: "Hermannplatz", line: "U7", travelTime: 12 },
            { station: "Mehringdamm", line: "U7", travelTime: 15 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 16 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 20 },
            { station: "Berliner Strasse", line: "U7", travelTime: 21 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 23 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 27 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 39 }
        ],
        "Rathaus Spandau": [
            { station: "Hermannplatz", line: "U7", travelTime: 27 },
            { station: "Mehringdamm", line: "U7", travelTime: 24 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 23 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 19 },
            { station: "Berliner Strasse", line: "U7", travelTime: 18 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 16 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 12 },
            { station: "Rudow", line: "U7", travelTime: 39 }
        ],
        "Hermannstrasse": [
            { station: "Hermannplatz", line: "U8", travelTime: 3 },
            { station: "Kottbusser Tor", line: "U8", travelTime: 5 },
            { station: "Alexanderplatz", line: "U8", travelTime: 9 },
            { station: "Osloer Strasse", line: "U8", travelTime: 16 },
            { station: "Wittenau", line: "U8", travelTime: 23 }
        ],
        "Wittenau": [
            { station: "Hermannplatz", line: "U8", travelTime: 20 },
            { station: "Kottbusser Tor", line: "U8", travelTime: 18 },
            { station: "Alexanderplatz", line: "U8", travelTime: 14 },
            { station: "Osloer Strasse", line: "U8", travelTime: 7 },
            { station: "Hermannstrasse", line: "U8", travelTime: 23 }
        ],
        "Osloer Strasse": [
            { station: "Hermannplatz", line: "U8", travelTime: 13 },
            { station: "Kottbusser Tor", line: "U8", travelTime: 11 },
            { station: "Alexanderplatz", line: "U8", travelTime: 7 },
            { station: "Wittenau", line: "U8", travelTime: 7 },
            { station: "Hermannstrasse", line: "U8", travelTime: 16 },
            { station: "Leopoldplatz", line: "U9", travelTime: 2 },
            { station: "Zoologischer Garten", line: "U9", travelTime: 8 },
            { station: "Kurfuerstendamm", line: "U9", travelTime: 9 },
            { station: "Spichernstrasse", line: "U9", travelTime: 10 },
            { station: "Berliner Strasse", line: "U9", travelTime: 12 },
            { station: "Rathaus Steglitz", line: "U9", travelTime: 17 }
        ],
        "Rathaus Steglitz": [
            { station: "Leopoldplatz", line: "U9", travelTime: 15 },
            { station: "Zoologischer Garten", line: "U9", travelTime: 9 },
            { station: "Kurfuerstendamm", line: "U9", travelTime: 8 },
            { station: "Spichernstrasse", line: "U9", travelTime: 7 },
            { station: "Berliner Strasse", line: "U9", travelTime: 5 },
            { station: "Osloer Strasse", line: "U9", travelTime: 17 }
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
            { station: "Nollendorfplatz", line: "U2", travelTime: 7 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 13 },
            { station: "Bismarckstrasse", line: "U2", travelTime: 16 },
            { station: "Ruhleben", line: "U2", travelTime: 22 },
        ],
        "Kottbusser Tor": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 8 },
            { station: "Gleisdreieck", line: "U1", travelTime: 4 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 6 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 3 },
            { station: "Hallesches Tor", line: "U1", travelTime: 2 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 9 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 3 },
            { station: "Gleisdreieck", line: "U3", travelTime: 4 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 6 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 3 },
            { station: "Hallesches Tor", line: "U3", travelTime: 2 },
            { station: "Warschauer Strasse", line: "U3", travelTime: 3 },
            { station: "Spichernstrasse", line: "U3", travelTime: 9 },
            { station: "Fehrbellinerplatz", line: "U3", travelTime: 11 },
            { station: "Krumme Lanke", line: "U3", travelTime: 20 },
            { station: "Hermannplatz", line: "U8", travelTime: 2 },
            { station: "Wittenau", line: "U8", travelTime: 18 },
            { station: "Alexanderplatz", line: "U8", travelTime: 4 },
            { station: "Osloer Strasse", line: "U8", travelTime: 11 },
            { station: "Hermannstrasse", line: "U8", travelTime: 5 }
        ],
        "Hermannplatz": [
            { station: "Rathaus Spandau", line: "U7", travelTime: 27 },
            { station: "Mehringdamm", line: "U7", travelTime: 3 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 4 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 8 },
            { station: "Berliner Strasse", line: "U7", travelTime: 9 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 11 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 15 },
            { station: "Rudow", line: "U7", travelTime: 12 },
            { station: "Hermannstrasse", line: "U8", travelTime: 3 },
            { station: "Kottbusser Tor", line: "U8", travelTime: 2 },
            { station: "Alexanderplatz", line: "U8", travelTime: 6 },
            { station: "Osloer Strasse", line: "U8", travelTime: 13 },
            { station: "Wittenau", line: "U8", travelTime: 20 },
        ],
        "Zoologischer Garten": [
            { station: "Bismarckstrasse", line: "U2", travelTime: 3 },
            { station: "Ruhleben", line: "U2", travelTime: 9 },
            { station: "Nollendorfplatz", line: "U2", travelTime: 2 },
            { station: "Gleisdreieck", line: "U2", travelTime: 4 },
            { station: "Stadtmitte", line: "U2", travelTime: 8 },
            { station: "Alexanderplatz", line: "U2", travelTime: 13 },
            { station: "Pankow", line: "U2", travelTime: 19 },
            { station: "Leopoldplatz", line: "U9", travelTime: 6 },
            { station: "Rathaus Steglitz", line: "U9", travelTime: 9 },
            { station: "Kurfuerstendamm", line: "U9", travelTime: 1 },
            { station: "Spichernstrasse", line: "U9", travelTime: 2 },
            { station: "Berliner Strasse", line: "U9", travelTime: 4 },
            { station: "Osloer Strasse", line: "U9", travelTime: 8 }],
        "Fehrbelliner Platz": [
            { station: "Gleisdreieck", line: "U3", travelTime: 7 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 5 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 8 },
            { station: "Hallesches Tor", line: "U3", travelTime: 9 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 11 },
            { station: "Spichernstrasse", line: "U3", travelTime: 2 },
            { station: "Warschauer Strasse", line: "U3", travelTime: 14 },
            { station: "Krumme Lanke", line: "U3", travelTime: 9 },
            { station: "Hermannplatz", line: "U7", travelTime: 11 },
            { station: "Mehringdamm", line: "U7", travelTime: 8 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 7 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 3 },
            { station: "Berliner Strasse", line: "U7", travelTime: 2 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 16 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 4 },
            { station: "Rudow", line: "U7", travelTime: 23 }],
        "Spichernstrasse": [
            { station: "Gleisdreieck", line: "U3", travelTime: 5 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 3 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 6 },
            { station: "Hallesches Tor", line: "U3", travelTime: 7 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 9 },
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 2 },
            { station: "Warschauer Strasse", line: "U3", travelTime: 12 },
            { station: "Krumme Lanke", line: "U3", travelTime: 11 },
            { station: "Leopoldplatz", line: "U9", travelTime: 8 },
            { station: "Zoologischer Garten", line: "U9", travelTime: 2 },
            { station: "Kurfuerstendamm", line: "U9", travelTime: 1 },
            { station: "Rathaus Steglitz", line: "U9", travelTime: 7 },
            { station: "Berliner Strasse", line: "U9", travelTime: 2 },
            { station: "Osloer Strasse", line: "U9", travelTime: 10 }
        ],
        "Gleisdreieck": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 4 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 2 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 5 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 1 },
            { station: "Hallesches Tor", line: "U1", travelTime: 2 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 4 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 7 },
            { station: "Bismarckstrasse", line: "U2", travelTime: 7 },
            { station: "Ruhleben", line: "U2", travelTime: 13 },
            { station: "Nollendorfplatz", line: "U2", travelTime: 2 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 4 },
            { station: "Stadtmitte", line: "U2", travelTime: 4 },
            { station: "Alexanderplatz", line: "U2", travelTime: 9 },
            { station: "Pankow", line: "U2", travelTime: 15 },
            { station: "Spichernstrasse", line: "U3", travelTime: 5 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 2 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 1 },
            { station: "Hallesches Tor", line: "U3", travelTime: 2 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 4 },
            { station: "Warschauer Strasse", line: "U3", travelTime: 7 },
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 7 },
            { station: "Krumme Lanke", line: "U3", travelTime: 16 }
        ],
        "Moeckernbruecke": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 5 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 3 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 6 },
            { station: "Gleisdreieck", line: "U1", travelTime: 1 },
            { station: "Hallesches Tor", line: "U1", travelTime: 1 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 3 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 6 },
            { station: "Spichernstrasse", line: "U3", travelTime: 6 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 3 },
            { station: "Gleisdreieck", line: "U3", travelTime: 1 },
            { station: "Hallesches Tor", line: "U3", travelTime: 1 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 3 },
            { station: "Warschauer Strasse", line: "U3", travelTime: 6 },
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 8 },
            { station: "Krumme Lanke", line: "U3", travelTime: 17 },
            { station: "Hermannplatz", line: "U7", travelTime: 4 },
            { station: "Mehringdamm", line: "U7", travelTime: 1 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 7 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 4 },
            { station: "Berliner Strasse", line: "U7", travelTime: 5 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 23 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 11 },
            { station: "Rudow", line: "U7", travelTime: 16 }
        ],
        "Hallesches Tor": [
            { station: "Kurfuerstendamm", line: "U1", travelTime: 6 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 4 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 7 },
            { station: "Gleisdreieck", line: "U1", travelTime: 2 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 1 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 2 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 5 },
            { station: "Spichernstrasse", line: "U3", travelTime: 7 },
            { station: "Nollendorfplatz", line: "U3", travelTime: 4 },
            { station: "Gleisdreieck", line: "U3", travelTime: 2 },
            { station: "Moeckernbruecke", line: "U3", travelTime: 1 },
            { station: "Kottbusser Tor", line: "U3", travelTime: 2 },
            { station: "Fehrbelliner Platz", line: "U3", travelTime: 9 },
            { station: "Krumme Lanke", line: "U3", travelTime: 18 },
            { station: "Warschauer Strasse", line: "U3", travelTime: 5 },
            { station: "Mehringdamm", line: "U6", travelTime: 1 },
            { station: "Alt-Tegel", line: "U6", travelTime: 19 },
            { station: "Stadtmitte", line: "U6", travelTime: 2 },
            { station: "Unter den Linden", line: "U6", travelTime: 3 },
            { station: "Leopoldplatz", line: "U6", travelTime: 10 },
            { station: "Alt-Mariendorf", line: "U6", travelTime: 9 }
        ],
        "Mehringdamm": [
            { station: "Alt-Tegel", line: "U6", travelTime: 20 },
            { station: "Hallesches Tor", line: "U6", travelTime: 1 },
            { station: "Stadtmitte", line: "U6", travelTime: 3 },
            { station: "Unter den Linden", line: "U6", travelTime: 4 },
            { station: "Leopoldplatz", line: "U6", travelTime: 11 },
            { station: "Alt-Mariendorf", line: "U6", travelTime: 8 },
            { station: "Hermannplatz", line: "U7", travelTime: 3 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 1 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 8 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 5 },
            { station: "Berliner Strasse", line: "U7", travelTime: 6 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 12 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 24 },
            { station: "Rudow", line: "U7", travelTime: 15 }
        ],
        "Bayerischer Platz": [
            { station: "Nollendorf Platz", line: "U4", travelTime: 2 },
            { station: "Innsbrucker Platz", line: "U4", travelTime: 2 },
            { station: "Hermannplatz", line: "U7", travelTime: 8 },
            { station: "Mehringdamm", line: "U7", travelTime: 5 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 3 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 4 },
            { station: "Berliner Strasse", line: "U7", travelTime: 1 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 19 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 7 },
            { station: "Rudow", line: "U7", travelTime: 20 }
        ],
        "Leopoldplatz": [
            { station: "Alt-Tegel", line: "U6", travelTime: 9 },
            { station: "Hallesches Tor", line: "U6", travelTime: 10 },
            { station: "Stadtmitte", line: "U6", travelTime: 8 },
            { station: "Unter den Linden", line: "U6", travelTime: 7 },
            { station: "Mehringdamm", line: "U6", travelTime: 11 },
            { station: "Alt-Mariendorf", line: "U6", travelTime: 19 },
            { station: "Spichernstrasse", line: "U9", travelTime: 8 },
            { station: "Zoologischer Garten", line: "U9", travelTime: 6 },
            { station: "Kurfuerstendamm", line: "U9", travelTime: 7 },
            { station: "Rathaus Steglitz", line: "U9", travelTime: 15 },
            { station: "Berliner Strasse", line: "U9", travelTime: 10 },
            { station: "Osloer Strasse", line: "U9", travelTime: 2 }
        ],
        "Unter den Linden": [
            { station: "Hoenow", line: "U5", travelTime: 22 },
            { station: "Alexanderplatz", line: "U5", travelTime: 3 },
            { station: "Hauptbahnhof", line: "U5", travelTime: 3 },
            { station: "Alt-Tegel", line: "U6", travelTime: 16 },
            { station: "Hallesches Tor", line: "U6", travelTime: 3 },
            { station: "Stadtmitte", line: "U6", travelTime: 1 },
            { station: "Mehringdamm", line: "U6", travelTime: 4 },
            { station: "Leopoldplatz", line: "U6", travelTime: 7 },
            { station: "Alt-Mariendorf", line: "U6", travelTime: 19 },
        ],
        "Stadtmitte": [
            { station: "Alt-Tegel", line: "U6", travelTime: 27 },
            { station: "Hallesches Tor", line: "U6", travelTime: 2 },
            { station: "Unter den Linden", line: "U6", travelTime: 1 },
            { station: "Mehringdamm", line: "U6", travelTime: 3 },
            { station: "Leopoldplatz", line: "U6", travelTime: 8 },
            { station: "Alt-Mariendorf", line: "U6", travelTime: 18 },
            { station: "Bismarckstrasse", line: "U2", travelTime: 11 },
            { station: "Ruhleben", line: "U2", travelTime: 17 },
            { station: "Nollendorfplatz", line: "U2", travelTime: 6 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 8 },
            { station: "Gleisdreieck", line: "U2", travelTime: 4 },
            { station: "Alexanderplatz", line: "U2", travelTime: 5 },
            { station: "Pankow", line: "U2", travelTime: 11 },
        ],
        "Berliner Strasse": [
            { station: "Spichernstrasse", line: "U9", travelTime: 2 },
            { station: "Zoologischer Garten", line: "U9", travelTime: 4 },
            { station: "Kurfuerstendamm", line: "U9", travelTime: 3 },
            { station: "Rathaus Steglitz", line: "U9", travelTime: 5 },
            { station: "Leopoldplatz", line: "U9", travelTime: 10 },
            { station: "Osloer Strasse", line: "U9", travelTime: 12 },
            { station: "Hermannplatz", line: "U7", travelTime: 9 },
            { station: "Mehringdamm", line: "U7", travelTime: 6 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 2 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 5 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 1 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 18 },
            { station: "Bismarckstrasse", line: "U7", travelTime: 6 },
            { station: "Rudow", line: "U7", travelTime: 21 }
        ],
        "Bismarckstrasse": [
            { station: "Hermannplatz", line: "U7", travelTime: 15 },
            { station: "Mehringdamm", line: "U7", travelTime: 12 },
            { station: "Fehrbelliner Platz", line: "U7", travelTime: 4 },
            { station: "Moeckernbruecke", line: "U7", travelTime: 11 },
            { station: "Bayerischer Platz", line: "U7", travelTime: 7 },
            { station: "Rathaus Spandau", line: "U7", travelTime: 12 },
            { station: "Berliner Strasse", line: "U7", travelTime: 6 },
            { station: "Rudow", line: "U7", travelTime: 27 },
            { station: "Stadtmitte", line: "U2", travelTime: 11 },
            { station: "Ruhleben", line: "U2", travelTime: 6 },
            { station: "Nollendorfplatz", line: "U2", travelTime: 5 },
            { station: "Zoologischer Garten", line: "U2", travelTime: 3 },
            { station: "Gleisdreieck", line: "U2", travelTime: 7 },
            { station: "Alexanderplatz", line: "U2", travelTime: 16 },
            { station: "Pankow", line: "U2", travelTime: 22 }
        ],
        "Kurfuerstendamm": [
            { station: "Spichernstrasse", line: "U9", travelTime: 1 },
            { station: "Zoologischer Garten", line: "U9", travelTime: 1 },
            { station: "Berliner Strasse", line: "U9", travelTime: 3 },
            { station: "Rathaus Steglitz", line: "U9", travelTime: 8 },
            { station: "Leopoldplatz", line: "U9", travelTime: 7 },
            { station: "Osloer Strasse", line: "U9", travelTime: 9 },
            { station: "Hallesches Tor", line: "U1", travelTime: 6 },
            { station: "Nollendorfplatz", line: "U1", travelTime: 2 },
            { station: "Uhlandstrasse", line: "U1", travelTime: 1 },
            { station: "Gleisdreieck", line: "U1", travelTime: 4 },
            { station: "Moeckernbruecke", line: "U1", travelTime: 5 },
            { station: "Kottbusser Tor", line: "U1", travelTime: 8 },
            { station: "Warschauer Strasse", line: "U1", travelTime: 11 }
        ]
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
    }
};

function findQuickestPathWithLines(connections, startStation, endStation, currentPath = [], currentTravelTime = 0, visitedStations = new Set()) {
    // Mark the current station as visited
    visitedStations.add(startStation);
  
    // Add the current station to the path
    currentPath.push(startStation);
  
    // If the current station is the end station, return the path and travel time
    if (startStation === endStation) {
      return { path: currentPath, travelTime: currentTravelTime };
    }
  
    let quickestPath = null;
    let quickestPathLines = null;
  
    // Explore all possible connections from the current station
    for (const connection of connections[startStation] || []) {
      const { station, travelTime, line } = connection;
  
      if (!visitedStations.has(station)) {
        const result = findQuickestPathWithLines(
          connections,
          station,
          endStation,
          [...currentPath],
          currentTravelTime + travelTime,
          visitedStations
        );
  
        // If a quicker path is found, update quickestPath and quickestPathLines
        if (result && (!quickestPath || result.travelTime < quickestPath.travelTime)) {
          quickestPath = result;
          quickestPathLines = [line];
        } else if (result && result.travelTime === quickestPath.travelTime) {
          quickestPathLines.push(line);
        }
      }
    }
  
    return quickestPath ? { path: quickestPath.path, travelTime: quickestPath.travelTime, lines: quickestPathLines } : null;
  }
  
  const startStation = "Uhlandstrasse";
  const endStation = "Krumme Lanke";
  
  const quickestPathWithLines = findQuickestPathWithLines(berlinRailNetwork.connections, startStation, endStation);
  
  if (quickestPathWithLines) {
    console.log("Quickest path:", quickestPathWithLines.path.join(" -> "));
    console.log("Travel time:", quickestPathWithLines.travelTime);
    console.log("Lines:", quickestPathWithLines.lines);
  } else {
    console.log("No path found.");
  }
  