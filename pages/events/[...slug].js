import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = (props) => {
  // const router = useRouter();
  // const data = router.query.slug;

  // if (!data) {
  //   return <p style={{ textAlign: "center" }}>Loading...</p>;
  // }

  // const numYear = +data[0];
  // const numMonth = +data[1];

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numMonth < 1 ||
  //   numMonth > 12 ||
  //   numYear < 2020 ||
  //   numYear > 2030
  // ) {
  //   return <p>invalid filter option</p>;
  // }

  if (props.hasError) {
    return <p>invalid filter option</p>;
  }

  // const filteredEvents = getFilteredEvents({
  //   year: numYear,
  //   month: numMonth,
  // });

  console.log(props.filteredEvent);

  if (!props.filteredEvent || props.filteredEvent.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <>
      <EventList events={props.filteredEvent} />
    </>
  );
};
export default FilteredEventsPage;
///////
/////////
///////
///////
////////
//////////
////////
///////////
///////////////
//

// SSR

export async function getServerSideProps(context) {
  const response = await fetch(
    "https://next-js-22e3a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const allEvents = [];

  for (const key in data) {
    allEvents.push({
      id: key,
      ...data[key],
    });
  }

  const date = context.params.slug;
  const numYear = +date[0];
  const numMonth = +date[1];

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

  return {
    props: {
      filteredEvent,
    },
  };
}
