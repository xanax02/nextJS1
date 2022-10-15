// import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
  const { featuredEvents } = props;

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const response = await fetch(
    "https://next-js-22e3a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const loadedEvents = [];

  for (const key in data) {
    loadedEvents.push({
      id: key,
      ...data[key],
    });
  }

  const featuredEvents = loadedEvents.filter((event) => event.isFeatured);

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}
