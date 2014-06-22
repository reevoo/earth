ReevooEarth.Client.Adapter = function () {
  this.product = function () {
    return [
      {
        "latitude": -37.81389999999999, "longitude": 144.96339999999998, "city": "Melbourne",
        "product_name": "18V Dustbuster® Pivot ® Hand Vac",
        "good_points": "Excellent suction. Easy to empty and clean filter. Easy access from stand.",
        "bad_points": "A little heavy."
      },
      {
        "latitude": 52.5, "longitude": 5.75, "city": "",
        "product_name": "9.6V Kruimeldief® met Cyclonic Action",
        "good_points": "Sterke constructie, goede zuigkracht, gemakkelijk op te bergen en schoon te maken. Voorziet ruim in de dagelijkse behoefte; wordt in huis dagelijks enkele keren gebruikt; prima.",
        "bad_points": "Stof-verzamelbakje gaat wat lastig open en dicht."
      },
      {
        "latitude": 39.5, "longitude": -8.0, "city": "",
        "product_name": "PT Gyro 1.5Ah 3.4Nm screwdriver",
        "good_points": "Muito fácil de utilizar, versátil e um bom desempenho.",
        "bad_points": null
      },
      {
        "latitude": 50.694199999999995, "longitude": 3.174599999999998, "city": "Roubaix",
        "product_name": "Perceuse NiCd 18V",
        "good_points": "2 batteries, bonne prise en main, silencieuse parrapport à d'autres perceuses de même puissance, mode percussion pratique",
        "bad_points": "pas encore vu de points négatifs"
      },
      {
        "latitude": 48.19999999999999, "longitude": 16.36670000000001, "city": "Vienna",
        "product_name": "12V Pivot Akku-Handstaubsauger",
        "good_points": "Lässt sich kompakt verstauen, sieht sehr modern aus, sehr saugstark, dank Pivot-Funktion individuell verstellbar, relativ leichtes entleeren",
        "bad_points": "könnte etwas leiser sein (ohne die Saugstärke zu verschlechtern), dank Pivot-Funktion muss man den Staubsauger erst immer Einsatzbereit vorbereiten..., beim Entleeren sollte der Dichtgummi beim ausklopfen nicht herausfallen"
      },
      {
        "latitude": 51.016699999999986, "longitude": 5.583300000000008, "city": "As",
        "product_name": "600W Heggenschaar (60cm)",
        "good_points": "heggeschaar met genoeg vermogen robust behalve de handgreep(gebroken tijdens val)",
        "bad_points": "gewicht kan doorwegen na langere tijd ermee gewerkt te hebben"
      },
      {
        "latitude": 51.5, "longitude": -0.12999999999999545, "city": "",
        "product_name": "400W Scorpion® Powered Handsaw",
        "good_points": "Good safety buttons, that little hands cannot turn on. Good design as either a saw or a jig.",
        "bad_points": "Pretty heavy to hold in one hand while operating."
      },
      {
        "latitude": 53.30000000000001, "longitude": -1.466700000000003, "city": "Dronfield",
        "product_name": "18V Lithium-Ion Dustbuster® Pivot Hand Vac",
        "good_points": "Works better than I thought a battery powered vac would do Having 2 speeds extends the battery life on one charge It is a lot quicker than having to get the large vacuum out for small areas",
        "bad_points": "None"
      },
      {
        "latitude": 42.1104, "longitude": 11.802500000000009, "city": "Civitavecchia",
        "product_name": "Ferro da stiro a vapore 1800w",
        "good_points": "Maneggevole e leggero con estetica buona che rende nel complesso piacevole il lavoro. Spia luminosa sempre ben visibile grazie alla sua collocazione e forma. Attacco speciale per il filo che permette di evitare che quest'ultimo si avvicini eccessivamente alla soletta incandescente. Pulsanti e manopole robusti (ivi incluso il selettore del vapore).",
        "bad_points": "L'unico punto debole potrebbe entrare in scena nell'uso che se ne fa in modalità a vapore. Consiglierei di evitare di poggiarlo in verticale mentre si stira a vapore (o a secco con acqua nel serbatoio). Per due motivi: il principale è che una volta in verticale può esserci fuoriuscita di acqua dai pulsanti del manico (fa pensare che l'acqua calda stia entrando ove non dovrebbe: ma potrebbe trattarsi solo di acqua fredda che circola liberamente per abbassamento della temperatura; ciò può accadere se la temperatura scende di parecchio e non si chiude il \"rubinetto\" ossia selettore vapore a zero \"X\". Lo stesso vale quando sgocciola dalla soletta: basta ricordarsi del selettore prima che il ferro si raffreddi eccessivamente). Il secondo motivo è che l'acqua all'interno del ferro se posizionato in senso verticale oltrepasserebbe la linea di livello massimo (oltre la quale non bisogna andare in fase di caricamento acqua distillata) e il timore è che l'acqua bollente possa danneggiare alcune parti interne poste vicino alla manopola della temperatura). Ma tutto ciò potrebbe essere nullo se il ferro è concepito per stare anche in verticale con acqua all'interno in modalità vapore (cosa che non sono riuscito ad accertare, pare un problema comune ad altri ferri a vapore se ho ben capito, e pertanto prudentemente mi limito a posizionarlo sempre in orizzontale almeno quando vi è acqua nel serbatoio). A secco senz'acqua dentro non vi sono problemi di sorta a riporlo durante l'uso sia in orizzontale che in verticale."
      },
      {
        "latitude": 52.65029999999999, "longitude": -2.453300000000013, "city": "Telford",
        "product_name": "Gyro Driver™ Gyroscopic Motion Sensing Screwdriver",
        "good_points": "Nice and light to hold",
        "bad_points": "Could have come with carry bad to hold charger etc"
      },
      {
        "latitude": 51.5, "longitude": -0.12999999999999545, "city": "",
        "product_name": "400W Scorpion® Powered Handsaw",
        "good_points": "Used for cutting firewood and trimming branches - Works well, is good value and has a two year guarantee",
        "bad_points": "The handle takes  time to get used to as it seems to be designed for hands like a gorilla."
      },
      {
        "latitude": 52.4443, "longitude": -1.5135999999999967, "city": "Coventry",
        "product_name": "4.8V Dustbuster® Wet & Dry Hand Vac",
        "good_points": "good base for charging",
        "bad_points": "emptying is quite hard"
      }
    ]
  }
  ;

  this.customerExperience = function (reviews) {
    return reviews.map(function (review) {
      var responses = review.responses.map(function (r) {
        return r.answer;
      });

      return {
        latitude: review.location.latitude,
        longitude: review.location.longitude,
        locationName: review.location.city || "", // delete the 'or' when data comes from API
        generalComments: responses[2],
        wouldBuyAgain: responses[3],
        firstName: review.reviewer.first_name,
        date: review.submitted_at,
      };
    });
  };

}
;

