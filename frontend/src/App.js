import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/Root";
import EventRootLayout from "./pages/RootEvent";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/events",
          element: <EventRootLayout />,
          children: [
            { index: true, element: <EventPage /> },
            { path: ":eventId", element: <EventDetailPage /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":eventId/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
