import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const data = router.query.slug;

  if (!data) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  const numYear = +data[0];
  const numMonth = +data[1];

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

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <>
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
