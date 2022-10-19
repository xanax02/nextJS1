import Head from "next/head"; // component of nextJS for head
import EventList from "../components/events/EventList";

const HomePage = (props) => {
  const { featuredEvents } = props;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta // meta-data for the page
          name="description"
          content="Find a lot of great events of NextJS community.. and meet lot of like minded people"
        />
      </Head>
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
    revalidate: 2400,
  };
}
