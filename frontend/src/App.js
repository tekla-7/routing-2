
import { RouterProvide, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsPage, { loader as eventLoader, } from './pages/Events';
import EventRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventRootLayout />, children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: 'edit', element: <EditEventPage /> },
            ]
          },

          { path: 'new', element: <NewEventPage /> },

        ]
      }
    ]
  },

])
function App() {
  return <RouterProvide router={router} />
}

export default App;
