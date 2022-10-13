import { useState, useEffect } from "react";
import useSWR from "swr"; // stale-while-revalidate

const SalesPage = () => {
  const [sales, setSales] = useState();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, err } = useSWR(
    "https://next-js-22e3a-default-rtdb.firebaseio.com/sales.json",
    fetcher
  ); // two args:
  //i. identifier/url as this hook bundle multiple request to this url rather than sending small request time to time.
  //ii. Fetcher function describing how the request should be sent.
  // return data from the api and any error from the request

  useEffect(() => {
    if (data) {
      const loadedSales = [];
      for (const key in data) {
        loadedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(loadedSales);
    }
  }, [data]);

  // this is a traditional approach but also can be done with swr
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://next-js-22e3a-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let loadedSales = [];
  //       for (const key in data) {
  //         loadedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(loadedSales);
  //       // console.log(data);
  //     });
  //   setIsLoading(false);
  // }, []);

  // if (!sales) {
  //   return <h1>No Data Found</h1>;
  // }

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (err) {
    return <h1>Failed to Load...</h1>;
  }

  if (!data || !sales) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default SalesPage;
