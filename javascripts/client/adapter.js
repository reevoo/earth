ReevooEarth.Client.Adapter = function () {

  /*
  // Commenting the pull from the real API for now, Edwin wants us first to create a demo
  // with hardcoded data until it's given the go ahead to be developed for production, at which
  // point we will need to make some changes to the real API endpoint this pulls reviews from or
  // create a new endpoint.
  //

  this.customerExperience = function (reviews) {
    return reviews.map(function (review) {
      var responses = review.responses.map(function (r) { return r.answer; });

      return {
        latitude: review.location.latitude,
        longitude: review.location.longitude,
        locationName: review.location.city || "", // delete the 'or' when data comes from API
        generalComments: responses[2],
        wouldBuyAgain: responses[3],
        firstName: review.reviewer.first_name,
        date: review.submitted_at
      };
    });
  };
  */


  /*
  // Test data for the demo.
  */
  this.customerExperience = function (reviews) {
    return [
      {
        "latitude": -37.81389999999999, "longitude": 144.96339999999998, "locationName": "Melbourne",
        "product_name": "18V Dustbuster® Pivot ® Hand Vac",
        "good_points": "Excellent suction. Easy to empty and clean filter. Easy access from stand.",
        "bad_points": "A little heavy.",
        "date":"2014-09-10 15:24:55 UTC",
        "first_name":"Paul",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1980778_PV1825N.jpg",
        "score": "9.0"

      },
      {
        "latitude": 52.5, "longitude": 5.75, "locationName": "",
        "product_name": "9.6V Kruimeldief® met Cyclonic Action",
        "good_points": "Sterke constructie, goede zuigkracht, gemakkelijk op te bergen en schoon te maken. Voorziet ruim in de dagelijkse behoefte; wordt in huis dagelijks enkele keren gebruikt; prima.",
        "bad_points": "Stof-verzamelbakje gaat wat lastig open en dicht.",
        "date":"2014-09-11 13:24:55 UTC",
        "first_name":"Alexander",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1965812_DV9610N_1.jpg",
        "score": "8.0"
      },
      {
        "latitude": 39.5, "longitude": -8.0, "locationName": "",
        "product_name": "PT Gyro 1.5Ah 3.4Nm screwdriver",
        "good_points": "Muito fácil de utilizar, versátil e um bom desempenho.",
        "bad_points": "Nada",
        "date":"2014-09-10 15:24:55 UTC",
        "first_name":"Beatrice",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1954440_BDCS361_1.jpg",
        "score": "10.0"
      },
      {
        "latitude": 50.694199999999995, "longitude": 3.174599999999998, "locationName": "Roubaix",
        "product_name": "Perceuse NiCd 18V",
        "good_points": "2 batteries, bonne prise en main, silencieuse parrapport à d'autres perceuses de même puissance, mode percussion pratique",
        "bad_points": "pas encore vu de points négatifs",
        "date":"2014-09-11 12:24:55 UTC",
        "first_name":"Jean",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1954463_EPC18CABK_1.jpg",
        "score": "8.0"
      },
      {
        "latitude": 48.19999999999999, "longitude": 16.36670000000001, "locationName": "Vienna",
        "product_name": "12V Pivot Akku-Handstaubsauger",
        "good_points": "Lässt sich kompakt verstauen, sieht sehr modern aus, sehr saugstark, dank Pivot-Funktion individuell verstellbar, relativ leichtes entleeren",
        "bad_points": "könnte etwas leiser sein (ohne die Saugstärke zu verschlechtern), dank Pivot-Funktion muss man den Staubsauger erst immer Einsatzbereit vorbereiten..., beim Entleeren sollte der Dichtgummi beim ausklopfen nicht herausfallen",
        "date":"2014-09-09 15:24:55 UTC",
        "first_name":"Franz",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1182075_PV1225NPM_5.jpg",
        "score": "7.0"
      },
      {
        "latitude": 51.016699999999986, "longitude": 5.583300000000008, "locationName": "As",
        "product_name": "600W Heggenschaar (60cm)",
        "good_points": "heggeschaar met genoeg vermogen robust behalve de handgreep(gebroken tijdens val)",
        "bad_points": "gewicht kan doorwegen na langere tijd ermee gewerkt te hebben",
        "date":"2014-09-10 15:24:55 UTC",
        "first_name":"Henk",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1959562_GT6060_1.jpg",
        "score": "9.0"
      },
      {
        "latitude": 51.5, "longitude": -0.12999999999999545, "locationName": "",
        "product_name": "400W Scorpion® Powered Handsaw",
        "good_points": "Good safety buttons, that little hands cannot turn on. Good design as either a saw or a jig.",
        "bad_points": "Pretty heavy to hold in one hand while operating.",
        "date":"2014-09-11 11:24:55 UTC",
        "first_name":"John",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1955704_KS890E_1.jpg",
        "score": "8.0"
      },
      {
        "latitude": 53.30000000000001, "longitude": -1.466700000000003, "locationName": "Dronfield",
        "product_name": "18V Lithium-Ion Dustbuster® Pivot Hand Vac",
        "good_points": "Works better than I thought a battery powered vac would do Having 2 speeds extends the battery life on one charge It is a lot quicker than having to get the large vacuum out for small areas",
        "bad_points": "None",
        "date":"2014-09-08 15:24:55 UTC",
        "first_name":"Philip",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1672709_DV1810EL.jpg",
        "score": "9.0"
      },
      {
        "latitude": 42.1104, "longitude": 11.802500000000009, "locationName": "Civitavecchia",
        "product_name": "Ferro da stiro a vapore 1800w",
        "good_points": "Maneggevole e leggero con estetica buona che rende nel complesso piacevole il lavoro. Spia luminosa sempre ben visibile grazie alla sua collocazione e forma. Attacco speciale per il filo che permette di evitare che quest'ultimo si avvicini eccessivamente alla soletta incandescente. Pulsanti e manopole robusti (ivi incluso il selettore del vapore).",
        "bad_points": "L'unico punto debole potrebbe entrare in scena nell'uso che se ne fa in modalità a vapore. Consiglierei di evitare di poggiarlo in verticale mentre si stira a vapore (o a secco con acqua nel serbatoio). Per due motivi: il principale è che una volta in verticale può esserci fuoriuscita di acqua dai pulsanti del manico",
        "date":"2014-09-10 15:24:55 UTC",
        "first_name":"Gianluca",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1966044_X810_1.jpg",
        "score": "7.0"
      },
      {
        "latitude": 52.65029999999999, "longitude": -2.453300000000013, "locationName": "Telford",
        "product_name": "Gyro Driver™ Gyroscopic Motion Sensing Screwdriver",
        "good_points": "Nice and light to hold",
        "bad_points": "Could have come with carry bad to hold charger etc",
        "date":"2014-09-11 10:24:55 UTC",
        "first_name":"Mike",
        "product_image": "images/90x90.jpg",
        "score": "8.0"
      },
      {
        "latitude": 51.5, "longitude": -0.12999999999999545, "locationName": "",
        "product_name": "400W Scorpion® Powered Handsaw",
        "good_points": "Used for cutting firewood and trimming branches - Works well, is good value and has a two year guarantee",
        "bad_points": "The handle takes  time to get used to as it seems to be designed for hands like a gorilla.",
        "date":"2014-09-10 15:24:55 UTC",
        "first_name":"David",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1959294_KS890EK_5.jpg",
        "score": "8.0"
      },
      {
        "latitude": 52.4443, "longitude": -1.5135999999999967, "locationName": "Coventry",
        "product_name": "4.8V Dustbuster® Wet & Dry Hand Vac",
        "good_points": "good base for charging",
        "bad_points": "emptying is quite hard",
        "date":"2014-09-08 15:24:55 UTC",
        "first_name":"Jonny",
        "product_image": "http://www.blackanddecker.co.uk/ProductImages/imports/EU_Images/BnD/1966023_WD4810N_1.jpg",
        "score": "9.0"
      }
    ];
  };


};
