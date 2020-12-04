const axios = require("axios");
axios
  .get("https://distance-calculator.p.rapidapi.com/distance/simple", {
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": "cee97564cdmshf3275a72be6bf49p1e9971jsn875cdc6c1583",
      "x-rapidapi-host": "distance-calculator.p.rapidapi.com",
      useQueryString: true,
    },
    params: {
      lat_1: "47.373535",
      long_1: "8.541109",
      lat_2: "42.335321",
      long_2: "-71.023516",
      unit: "kilometers",
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(result.body);
// var unirest = require("unirest");

// var req = unirest(
//   "GET",
//   "https://distance-calculator.p.rapidapi.com/distance/simple"
// );

// req.query({
//   lat_1: "47.373535",
//   long_1: "8.541109",
//   lat_2: "42.335321",
//   long_2: "-71.023516",
//   unit: "kilometers",
// });

// req.headers({
//   "content-type": "application/json",
//   "x-rapidapi-key": "cee97564cdmshf3275a72be6bf49p1e9971jsn875cdc6c1583",
//   "x-rapidapi-host": "distance-calculator.p.rapidapi.com",
//   useQueryString: true,
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });
