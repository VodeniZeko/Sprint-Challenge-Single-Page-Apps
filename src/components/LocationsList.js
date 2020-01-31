import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res);
        // setLocations(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(locations);
  return <div>hi</div>;
}
