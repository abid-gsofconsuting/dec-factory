import { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "../../components/dataCard";
export default function UserCard({ API_URL, title }) {
  //state
  const [data, setData] = useState(0);
  //api call (fetch data)
  const getDate = async () => {
    try {
      axios.get(API_URL).then((response) => {
        if (response.user[0].count) {
            setData(response.user[0].count)
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  //life cycle (useEffect hook)
  useEffect(() => {
    getDate();
    // eslint-disable-next-line 
  }, []);

  //JSX
  return <DataCard title={title} data={data}  />;
}
