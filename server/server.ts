import { error } from "console";

const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const findData = (obj, targetValue) => {
  for (const key in obj) {
    if (obj[key] === targetValue) {
      return obj;
    } else if (typeof obj[key] === "object") {
      const nestVal = findData(obj[key], targetValue);
      if (nestVal !== undefined) {
        return nestVal;
      }
    }else if(Array.isArray(obj[key])){
      for(let value of obj[key]){
        if(value=== targetValue){
          return obj[key]
        }else if(typeof (value)==="object"){
          for(let key in value){
            if(value[key]===targetValue){
              return value
            }else if(typeof (value[key]=="object")){
              for(let nestKey in value[key]){
                if(nestKey===targetValue){
                  return value[key]
                }else if(Array.isArray(value[key])){
                  for(let arrayValue of value[key]){
                    if(arrayValue===targetValue){
                      return value[key]
                    }
                  }
                }
              }
            }

          }
        }
      }
    }
  }
  return undefined;
};

const searchData = () => {
  return axios.get("https://serpapi.com/search?engine=google_maps", {
    params: {
      q: "coffee",
      api_key: "6767f3b8aa507a5819bdb55c995a451e2e3d4f4a0fc258c187b6aa2ba68577d9",
      engine: "google",
    },
  });
};

app.post("/", async (req, res) => {
  try {
    await searchData()
      .then((response) => {
        const givenString = req.body;
        
        const searchObject = findData(response.data, givenString);
        if (!searchObject) {
          console.log("Value not found");
        } else {
          console.log(searchObject);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    const responseData = { message: "Request received successfully" };
    res.status(200).json(responseData);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});