import EventForm from "../components/EventForm.js";
import { useRouteLoaderData } from "react-router-dom";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventForm event={data.event} />;
}
