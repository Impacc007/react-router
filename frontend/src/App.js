import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/event", element: <EventPage /> },
    { path: "/event/:eventId", element: <EventDetailPage /> },
    { path: "/event/new", element: <NewEventPage /> },
    { path: "event/:eventId/edit", element: <EditEventPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
