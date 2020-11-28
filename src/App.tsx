import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default App;
