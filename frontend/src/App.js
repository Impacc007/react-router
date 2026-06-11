import HomePage from "./pages/HomePage";
import EventPage, { loader as eventsLoader } from "./pages/EventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EventRootLayout from "./pages/RootEvent";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import EventItem from "./components/EventItem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/events",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },

            { path: "new", element: <NewEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
