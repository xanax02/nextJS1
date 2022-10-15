import { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

//CLIENT SIDE RENDERING
const FilteredEventsPage = () => {
  const router = useRouter();
  const date = router.query.slug;

  console.log(date);

  if (!date) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  const numYear = +date[0];
  const numMonth = +date[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numMonth < 1 ||
    numMonth > 12 ||
    numYear < 2020 ||
    numYear > 2030
  ) {
    return <p>invalid filter option</p>;
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://next-js-22e3a-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  const allEvents = [];

  for (const key in data) {
    allEvents.push({
      id: key,
      ...data[key],
    });
  }

  const filteredEvent = [];

  allEvents.find((event) => {
    const eventDate = new Date(event.date);
    if (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    ) {
      filteredEvent.push(event);
    }
  });

  if (!filteredEvent || error) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <>
      <EventList events={filteredEvent} />
    </>
  );
};

export default FilteredEventsPage;

///SERVER SIDE RENDERING
// const FilteredEventsPage = (props) => {

//   if (props.hasError) {
//     return <p>invalid filter option</p>;
//   }

// if (!props.filteredEvent || props.filteredEvent.length === 0) {
//   return <p>No events found for the chosen filter!</p>;
// }

// return (
//   <>
//     <EventList events={props.filteredEvent} />
//   </>
// );
// };
// export default FilteredEventsPage;

//////////////////////////////

// SSR
// export async function getServerSideProps(context) {
//   const response = await fetch(
//     "https://next-js-22e3a-default-rtdb.firebaseio.com/events.json"
//   );
//   const data = await response.json();

//   const allEvents = [];

//   for (const key in data) {
//     allEvents.push({
//       id: key,
//       ...data[key],
//     });
//   }

//   const date = context.params.slug;
//   const numYear = +date[0];
//   const numMonth = +date[1];

//   const filteredEvent = [];

//   allEvents.find((event) => {
//     const eventDate = new Date(event.date);
//     if (
//       eventDate.getFullYear() === numYear &&
//       eventDate.getMonth() === numMonth - 1
//     ) {
//       filteredEvent.push(event);
//     }
//   });

//   return {
//     props: {
//       filteredEvent,
//     },
//   };
// }
