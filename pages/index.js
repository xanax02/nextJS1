import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const events = getFeaturedEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default HomePage;
