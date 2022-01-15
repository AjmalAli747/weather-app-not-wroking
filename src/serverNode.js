const http = require("http");
const fs = require("fs");
const requests = require("requests");
const port = 8000;

const homwFile = fs.readFile("../src/App.js", "utf-8", (req, res) => {
  // console.log(res);
});

const relapceAllData = (tempVal, orangeValue) => {
    let currentValueAPI = tempVal.replace("{%tempVal%}", orangeValue.main.temp);
     currentValueAPI = currentValueAPI.replace("{%temp_min%}", orangeValue.main.temp_min);
     currentValueAPI = currentValueAPI.replace("{%temp_max%}", orangeValue.main.temp_max);
     currentValueAPI = currentValueAPI.replace("{%name%}", orangeValue.name);
     currentValueAPI = currentValueAPI.replace("{%country%}", orangeValue.sys.country);

    return currentValueAPI;
}

http
  .createServer((req, res) => {
    if (req.url == "/") {
      requests("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=ebb678e25f492ba19f93b33feef4e875")
        .on("data", function (dataValue) {
            const objData = JSON.parse(dataValue);
            const arrayData = [objData];
            const realTimeData = arrayData.map((val) => {
                relapceAllData(homwFile, val)
            }).join("")

            res.write(realTimeData);
        })
        .on("end", function (err) {
          if (err) return console.log("connection closed due to errors", err);
          res.end();

          console.log("end");
        });
    }
  })
  .listen(port, "127.0.0.1");
