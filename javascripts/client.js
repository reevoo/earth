ReevooEarth.Client = function () {
  var api = "https://api.reevoocloud.com/v4";

  this.authenticate = function () {
    var user = param("username");
    var pass = param("password");

    $.ajaxSetup({ headers: authHeader(user, pass), async: false });
  };

  this.customerExperienceReviews = function () {
    var trkref = param("trkref");

    var url = api;
    url += "/organisations;trkref=" + trkref;
    url += "/customer_experience_reviews";

    var data;
    $.get(url, function (d) { data = d; });
    return data.customer_experience_reviews;
  };

  // private
  var authHeader = function (user, pass) {
    return { 'Authorization': 'Basic ' + btoa(user + ":" + pass) }
  };

  // http://stackoverflow.com/questions/1403888/get-escaped-url-parameter#answer-1404100
  var param = function (name) {
    return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
  }


  // Stubbed until we figure out where to source reviews securely.
  this.latestReviews = function () {

    return [
    { product_name: ' York  ' , latitude: 53.9576 , longitude: -1.08271  },
    { product_name: ' Worcester ' , latitude: 52.1894 , longitude: -2.22001  },
    { product_name: ' Wolverhampton ' , latitude: 52.5855 , longitude: -2.12296  },
    { product_name: ' Woking  ' , latitude: 51.319  , longitude: -0.55893  },
    { product_name: ' Witney  ' , latitude: 51.7836 , longitude: -1.4854 },
    { product_name: ' Winford ' , latitude: 51.3833 , longitude: -2.66111  },
    { product_name: ' Windsor ' , latitude: 54.5667 , longitude: -5.95 },
    { product_name: ' Windermere  ' , latitude: 54.3809 , longitude: -2.90709  },
    { product_name: ' Winchester  ' , latitude: 51.0651 , longitude: -1.3187 },
    { product_name: ' Wigan ' , latitude: 53.5333 , longitude: -2.61667  },
    { product_name: ' Wick  ' , latitude: 52.1  , longitude: -2.05 },
    { product_name: ' Weybridge ' , latitude: 51.3722 , longitude: -0.45297  },
    { product_name: ' Weston-super-Mare ' , latitude: 51.346  , longitude: -2.97665  },
    { product_name: ' Watford ' , latitude: 52.3169 , longitude: -1.1158 },
    { product_name: ' Washington  ' , latitude: 54.9  , longitude: -1.51667  },
    { product_name: ' Warwick ' , latitude: 54.9036 , longitude: -2.82949  },
    { product_name: ' Warrington  ' , latitude: 53.3925 , longitude: -2.58024  },
    { product_name: ' Walsall ' , latitude: 52.5853 , longitude: -1.98396  },
    { product_name: ' Wallingford ' , latitude: 51.5998 , longitude: -1.1248 },
    { product_name: ' Uckfield  ' , latitude: 50.9695 , longitude: 0.09589 },
    { product_name: ' Troon ' , latitude: 55.5436 , longitude: -4.66335  },
    { product_name: ' Torquay ' , latitude: 50.4638 , longitude: -3.51434  },
    { product_name: ' Tiverton  ' , latitude: 53.1333 , longitude: -2.66667  },
    { product_name: ' Tewkesbury  ' , latitude: 51.9945 , longitude: -2.15681  },
    { product_name: ' Templepatrick ' , latitude: 54.6833 , longitude: -6.08333  },
    { product_name: ' Tavistock ' , latitude: 50.5494 , longitude: -4.14418  },
    { product_name: ' Taunton ' , latitude: 51.0149 , longitude: -3.10293  },
    { product_name: ' Tamworth  ' , latitude: 52.634  , longitude: -1.69587  },
    { product_name: ' Swindon ' , latitude: 51.9226 , longitude: -2.09581  },
    { product_name: ' Swansea ' , latitude: 51.6208 , longitude: -3.94323  },
    { product_name: ' Sunderland  ' , latitude: 54.9047 , longitude: -1.38222  },
    { product_name: ' Stratford-upon-Avon ' , latitude: 52.1917 , longitude: -1.70734  },
    { product_name: ' Stone ' , latitude: 52.9059 , longitude: -2.15409  },
    { product_name: ' Stoke-on-Trent  ' , latitude: 53.0042 , longitude: -2.18538  },
    { product_name: ' Stockport ' , latitude: 53.4098 , longitude: -2.15761  },
    { product_name: ' Stirling  ' , latitude: 56.119  , longitude: -3.93682  },
    { product_name: ' Stevenage ' , latitude: 51.9022 , longitude: -0.20256  },
    { product_name: ' Stansted  ' , latitude: 51.3359 , longitude: 0.3059  },
    { product_name: ' Southport ' , latitude: 53.6478 , longitude: -3.00648  },
    { product_name: ' Southampton ' , latitude: 50.9039 , longitude: -1.40428  },
    { product_name: ' Solihull  ' , latitude: 52.4143 , longitude: -1.78094  },
    { product_name: ' Sheffield ' , latitude: 53.383  , longitude: -1.4659 },
    { product_name: ' Shanklin  ' , latitude: 50.6261 , longitude: -1.1785 },
    { product_name: ' Sevenoaks ' , latitude: 51.27 , longitude: 0.19278 },
    { product_name: ' Scarborough ' , latitude: 54.2797 , longitude: -0.40443  },
    { product_name: ' Sandbach  ' , latitude: 53.1451 , longitude: -2.36251  },
    { product_name: ' Salisbury ' , latitude: 51.0693 , longitude: -1.79569  },
    { product_name: ' Saint Helens  ' , latitude: 53.45 , longitude: -2.73333  },
    { product_name: ' Royal Tunbridge Wells ' , latitude: 51.1325 , longitude: 0.26333 },
    { product_name: ' Rotherham ' , latitude: 53.4301 , longitude: -1.35678  },
    { product_name: ' Rochdale  ' , latitude: 53.6177 , longitude: -2.1552 },
    { product_name: ' Reading ' , latitude: 51.4562 , longitude: -0.97113  },
    { product_name: ' Ramsgate  ' , latitude: 51.3358 , longitude: 1.41552 },
    { product_name: ' Prestwick ' , latitude: 55.4833 , longitude: -4.61667  },
    { product_name: ' Preston ' , latitude: 55.5167 , longitude: -1.7  },
    { product_name: ' Prescot ' , latitude: 53.4295 , longitude: -2.80031  },
    { product_name: ' Portsmouth  ' , latitude: 53.7333 , longitude: -2.15 },
    { product_name: ' Poole ' , latitude: 50.7167 , longitude: -2  },
    { product_name: ' Plymouth  ' , latitude: 50.3715 , longitude: -4.14305  },
    { product_name: ' Pitlochry ' , latitude: 56.7051 , longitude: -3.73432  },
    { product_name: ' Peterborough  ' , latitude: 52.5736 , longitude: -0.24777  },
    { product_name: ' Perth ' , latitude: 56.3952 , longitude: -3.43139  },
    { product_name: ' Penrith ' , latitude: 54.6658 , longitude: -2.75757  },
    { product_name: ' Penkridge ' , latitude: 52.7256 , longitude: -2.1156 },
    { product_name: ' Peebles ' , latitude: 55.6519 , longitude: -3.1888 },
    { product_name: ' Oxford  ' , latitude: 51.7522 , longitude: -1.25596  },
    { product_name: ' Oban  ' , latitude: 56.4127 , longitude: -5.47062  },
    { product_name: ' Oakham  ' , latitude: 52.6667 , longitude: -0.73333  },
    { product_name: ' Nottingham  ' , latitude: 52.9536 , longitude: -1.15047  },
    { product_name: ' Norwich ' , latitude: 52.6278 , longitude: 1.29834 },
    { product_name: ' Northampton ' , latitude: 52.25 , longitude: -0.88333  },
    { product_name: ' Newton Abbot  ' , latitude: 50.5286 , longitude: -3.61186  },
    { product_name: ' Newquay ' , latitude: 50.4132 , longitude: -5.08186  },
    { product_name: ' Newport ' , latitude: 53.7633 , longitude: -0.69986  },
    { product_name: ' Newcastle upon Tyne ' , latitude: 54.9733 , longitude: -1.61396  },
    { product_name: ' Newcastle ' , latitude: 52.4333 , longitude: -3.11667  },
    { product_name: ' Newbury ' , latitude: 51.4003 , longitude: -1.32059  },
    { product_name: ' Nairn ' , latitude: 57.5809 , longitude: -3.87973  },
    { product_name: ' Morpeth ' , latitude: 55.1676 , longitude: -1.6912 },
    { product_name: ' Milton Keynes ' , latitude: 52.0417 , longitude: -0.75583  },
    { product_name: ' Market Bosworth ' , latitude: 52.6243 , longitude: -1.40174  },
    { product_name: ' Manchester  ' , latitude: 53.4809 , longitude: -2.23743  },
    { product_name: ' Maidstone ' , latitude: 51.2667 , longitude: 0.51667 },
    { product_name: ' Lymington ' , latitude: 50.7577 , longitude: -1.5443 },
    { product_name: ' Luton ' , latitude: 51.8797 , longitude: -0.41748  },
    { product_name: ' London  ' , latitude: 51.5085 , longitude: -0.12574  },
    { product_name: ' Llandudno ' , latitude: 53.325  , longitude: -3.83148  },
    { product_name: ' Llanberis ' , latitude: 53.1192 , longitude: -4.13017  },
    { product_name: ' Liverpool ' , latitude: 53.4106 , longitude: -2.97794  },
    { product_name: ' Lincoln ' , latitude: 53.2268 , longitude: -0.53792  },
    { product_name: ' Leicester ' , latitude: 52.6386 , longitude: -1.13169  },
    { product_name: ' Leeds ' , latitude: 53.7965 , longitude: -1.54785  },
    { product_name: ' Lancaster ' , latitude: 54.0667 , longitude: -2.83333  },
    { product_name: ' Kyle of Lochalsh  ' , latitude: 57.2839 , longitude: -5.71117  },
    { product_name: ' Kinross ' , latitude: 56.2047 , longitude: -3.42138  },
    { product_name: ' Kingussie ' , latitude: 57.08 , longitude: -4.05231  },
    { product_name: ' Kilsyth ' , latitude: 55.976  , longitude: -4.05916  },
    { product_name: ' Kendal  ' , latitude: 54.3268 , longitude: -2.74757  },
    { product_name: ' Ipswich ' , latitude: 52.0592 , longitude: 1.15545 },
    { product_name: ' Inverness ' , latitude: 57.4791 , longitude: -4.22398  },
    ]
  };

};
