import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Check mail" },
  { id: "e2", title: "Meeting with Selena" },
];

export default function EventPage() {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <Link key={event.id} to={event.id}>
            {event.title}
          </Link>
        ))}
      </ul>
    </>
  );
}
