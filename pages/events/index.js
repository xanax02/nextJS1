import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSubmit={findEventHandler} />
      <EventList events={events} />
    </>
  );
};

export default AllEventsPage;

export async function getStaticProps() {
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

  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  };
}
