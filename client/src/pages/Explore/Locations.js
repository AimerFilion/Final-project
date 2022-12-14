const Locations = [
  {
    venue: "Casa Del Popolo",
    address: "4873 Saint-Laurent Blvd, Montreal, QC H2T 1R6",
    lat: 45.5222,
    lng: -73.5905,
  },
  {
    venue: "La Sala Rossa",
    address: "4848 St Laurent Blvd, Montreal, Quebec H2T 1R5",
    lat: 45.52177,
    lng: -73.59051,
  },
  {
    venue: "Le Belmont",
    address:
      "Immeuble Landry Building, 4483 St Laurent Blvd, Montreal, Quebec H2W 1Z8",
    lat: 45.52013,
    lng: -73.58631,
  },
  {
    venue: "Café Campus",
    address: "57 Rue Prince-Arthur E, Montréal, QC H2X 1B4",
    lat: 45.51455,
    lng: -73.57226,
  },
  {
    venue: "Petit Campus",
    address: "57-b Rue Prince-Arthur E, Montréal, QC H2X 1B4",
    lat: 45.51455,
    lng: -73.57226,
  },
  {
    venue: "Corona Theatre",
    address: "2490 Notre-Dame St W, Montreal, Quebec H3J 1N5",
    lat: 45.4829,
    lng: -73.5751,
  },
  {
    venue: "Barfly",
    address: "4062 St Laurent Blvd, Montreal, Quebec H2W 1Y8",
    lat: 45.51704,
    lng: -73.57994,
  },
  {
    venue: "O Patro Vys",
    address: "356 Mont-Royal Ave E, Montreal, Quebec H2T 2G4",
    lat: 45.5234,
    lng: -73.5831,
  },
  {
    venue: "La Tulipe",
    address: "4530 Av. Papineau, Montréal, QC H2H 1V3",
    lat: 45.53306,
    lng: -73.57539,
  },
  {
    venue: "Le National",
    address: "1220 St Catherine St E, Montreal, Quebec H2L 2G9",
    lat: 45.51858,
    lng: -73.55585,
  },
  {
    venue: "Le Ritz PDB",
    address: "179 Rue Jean-Talon O, Montréal, QC H2R 2X2",
    lat: 45.53277,
    lng: -73.62028,
  },
  {
    venue: "Théâtre Fairmount",
    address: "5240 Park Ave, Montreal, Quebec H2V 4G7",
    lat: 45.52055,
    lng: -73.598464,
  },
  {
    venue: "Rialto Theatre",
    address: "5723 Park Ave, Montreal, Quebec H2V 4H2",
    lat: 45.523333,
    lng: -73.605,
  },
  {
    venue: "L'Escogriffe",
    address: "4461 Saint Denis St, Montreal, Quebec H2J 2L2",
    lat: 45.52387,
    lng: -73.58221,
  },
  {
    venue: "Société des arts technologiques [SAT]",
    address: "1201, Boulevard Saint-Laurent, Montreal QC H2X 2S6 Canada",
    lat: 45.50957,
    lng: -73.56271,
  },
  {
    venue: "Théâtre Plaza",
    address: "6505 Rue St-Hubert, Montréal, QC H2S 2M5",
    lat: 45.53635,
    lng: -73.60321,
  },
  {
    venue: "MTELUS",
    address: "59 St Catherine St E, Montreal, Quebec H2X 1K5",
    lat: 45.51077,
    lng: -73.56363,
  },
  {
    venue: "Brasserie Beaubien",
    address: "73 Rue Beaubien E, Montréal, QC H2S 1R1",
    lat: 45.53123,
    lng: -73.60779,
  },
  {
    venue: "Quai des Brumes",
    address: "4481 Saint Denis St, Montreal, Quebec H2J 2L2",
    lat: 45.52396,
    lng: -73.58245,
  },
  {
    venue: "Bar l'Hémisphère Gauche",
    address: "221 Rue Beaubien E, Montréal, QC H2S 1R5",
    lat: 45.53224,
    lng: -73.60687,
  },
  {
    venue: "Turbo Haüs",
    address: "2040 Saint Denis St, Montreal, Quebec H2X 1E7",
    lat: 45.51630401611328,
    lng: -73.56610107421875,
  },
  {
    venue: "Ausgang Plaza",
    address: "6524 Rue St-Hubert, Montréal, QC H2S 2M3",
    lat: 45.5366325378418,
    lng: -73.60418701171875,
  },
  {
    venue: "Club Soda",
    address: "1225 St Laurent Blvd, Montreal, Quebec H2X 2S6",
    lat: 45.5098,
    lng: -73.5633,
  },
  {
    venue: "Les Foufounes Électriques",
    address: "87 St Catherine St E, Montreal, Quebec H2X 1K5",
    lat: 45.511,
    lng: -73.563,
  },
  {
    venue: "Théâtre Saint-Denis",
    address: "1594 Saint Denis St, Montreal, Quebec H2X 3K2",
    lat: 45.5146,
    lng: -73.5628,
  },
  {
    venue: "Balattou",
    address: "4372 St Laurent Blvd, Montreal, Quebec H2W 1Z5",
    lat: 45.5191,
    lng: -73.58463,
  },
  {
    venue: "Le Studio TD",
    address: "305 Saint-Catherine St W, Montreal, Quebec H2X 2A3",
    lat: 45.506757,
    lng: -73.5689936,
  },
  {
    venue: "Ursa",
    address: "5589 Avenue du Parc, Montreal, QC H2V 4H2",
    lat: 45.52264,
    lng: -73.6027,
  },
  {
    venue: "Centre PHI",
    address: "315 Saint-Paul St W, Montreal, QC H2Y 2A3",
    lat: 45.508525,
    lng: -73.574252,
  },
  {
    venue: "Café Cléopatra",
    address: "1230 St Laurent Blvd, Montreal, QC H2X 2S5",
    lat: 45.50952,
    lng: -73.56347,
  },
  {
    venue: "Bar Notre-Dame-Des-Quilles",
    address: "32 Beaubien St W, Montreal, QC H2S 1P8",
    lat: 45.53059,
    lng: -73.60787,
  },
  {
    venue: "Le Ministère",
    address: "4521 St Laurent Blvd, Montreal, Quebec H2T 1R2",
    lat: 45.52046,
    lng: -73.58678,
  },
  {
    venue: "WIP",
    address: " 3487 St Laurent Blvd, Montreal, QC H2X 2T6",
    lat: 45.5133,
    lng: -73.5707,
  },
];

export default Locations;
