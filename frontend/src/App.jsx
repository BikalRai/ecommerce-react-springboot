import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/hello");
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <h1 className='text-9xl'>{data} from springboot</h1>;
}
