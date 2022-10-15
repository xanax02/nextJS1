// import { useRouter } from "next/router";
// import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = (props) => {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  const { event } = props;

  // if (!event) {
  //   return <h1>Event Not Found</h1>;
  // }

  // console.log(event);

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent content={event.content} />
    </>
  );
};

export default EventDetailPage;

export async function getStaticProps(context) {
  //fetching data from backEnd
  const response = await fetch(
    "https://next-js-22e3a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  //loading all events
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  //searching specific id event
  const specificEvent = events.find(
    (event) => event.id === context.params.eventId
  );

  return {
    props: {
      event: specificEvent,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  //fetching data from backend
  const response = await fetch(
    "https://next-js-22e3a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  //loading all events id
  const eventIds = [];
  for (const key in data) {
    eventIds.push(key);
  }
  // console.log(eventIds);
  //creating paths for all ids
  const paths = eventIds.map((id) => {
    return {
      params: { eventId: id },
    };
  });
  // console.log(paths);
  //returing paths
  return {
    paths,
    fallback: "blocking",
  };
}
