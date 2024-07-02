
import { RouterProvide, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home';
import EventDetailPage, { loader as eventDetailLoader , action as delateEventAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsPage, { loader as eventLoader, } from './pages/Events';
import EventRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import {action as newEventAction} from './components/EventForm'
import NewsletterPage , {action as newsletterAction} from './pages/Newsletter';

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
              { index: true, element: <EventDetailPage /> , action:delateEventAction},
              { path: 'edit', element: <EditEventPage /> ,action:newEventAction },
            ]
          },

          { path: 'new', element: <NewEventPage /> , action:newEventAction },

        ]
      },
    {path:'newsletter' , 
      element: <NewsletterPage />,
      action:newsletterAction

    }
    ]
  },

])
function App() {
  return <RouterProvide router={router} />
}

export default App;
