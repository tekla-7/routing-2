
import { RouterProvide, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsPage  , {loader} from './pages/Events';
import EventRootLayout from './pages/EventsRoot';
const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventRootLayout />, children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loader
          },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ]
      }
    ]
  },

])
function App() {
  return <RouterProvide router={router} />
}

export default App;
