function get_postage(weight, type, callback) {
  var postage = {
    stamped: {
      name: "Letter (Stamped)",
      "1": "$0.49",
      "2": "$0.70",
      "3": "$0.91",
      "3.5": "$1.12",
      "4": "$1.61", //USPS website said weights over 3.5 see Large Envelope (flat) pricing
      "5": "$1.82",
      "6": "$2.03",
      "7": "$2.24",
      "8": "$2.45",
      "9": "$2.66",
      "10": "$2.87",
      "11": "$3.08",
      "12": "$3.29",
      "13": "$3.50"
    },
    metered: {
      name: "Letter (Metered)",
      "1": "$0.46",
      "2": "$0.67",
      "3": "$0.88",
      "3.5": "$1.09",
      "4": "$1.61", //USPS website said weights over 3.5 see Large Envelope (flat) pricing
      "5": "$1.82",
      "6": "$2.03",
      "7": "$2.24",
      "8": "$2.45",
      "9": "$2.66",
      "10": "$2.87",
      "11": "$3.08",
      "12": "$3.29",
      "13": "$3.50"
    },
    flat: {
      name: "Large Envelope (Flat)",
      "1": "$0.98",
      "2": "$1.19",
      "3": "$1.40",
      "4": "$1.61",
      "5": "$1.82",
      "6": "$2.03",
      "7": "$2.24",
      "8": "$2.45",
      "9": "$2.66",
      "10": "$2.87",
      "11": "$3.08",
      "12": "$3.29",
      "13": "$3.50"
    },
    parcel: {
      name: "Parcel",
      "1": "$2.67",
      "2": "$2.67",
      "3": "$2.67",
      "4": "$2.67",
      "5": "$2.85",
      "6": "$3.03",
      "7": "$3.21",
      "8": "$3.39",
      "9": "$3.57",
      "10": "$3.75",
      "11": "$3.93",
      "12": "$4.11",
      "13": "$4.29"
    }
  };

  if (!postage.hasOwnProperty(type))
    return callback("Error: Invalid Postal Type '" + type + "'");

  filtered = Object.keys(postage[type]).filter(function (key) {
    return Number(key) >= weight;
  });

  callback(null, {
    price: (filtered.length) ? postage[type][filtered[0]] : "Pricing Unavailable",
    weight: weight,
    type: postage[type].name
  });
}

module.exports = { get_postage: get_postage };
