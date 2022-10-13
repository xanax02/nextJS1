import { useState, useEffect } from "react";

const SalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://next-js-22e3a-default-rtdb.firebaseio.com/sales.json")
      .then((res) => res.json())
      .then((data) => {
        let loadedSales = [];
        for (const key in data) {
          loadedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(loadedSales);
        // console.log(data);
      });
    setIsLoading(false);
  }, []);

  if (!sales) {
    return <h1>No Data Found</h1>;
  }

  if (isLoading) {
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
