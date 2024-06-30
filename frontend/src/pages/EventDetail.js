import { useRouteLoaderData, useParams ,json } from "react-router-dom"
import EventItem from "../components/EventItem"



function EventDetailPage() {
    // const params = useParams()
const data=useRouteLoaderData('event-detail')
    return <>
        <EventItem event={data.event} />
    </>
}

export default EventDetailPage

export async function loader({ request, params }) {
    // request.url
    const id = params.eventtId
    const response = fetch('http//localhost:8080/events/' + id)

    if(!response.ok){
        throw json({message:'could nor fetch details'},{state:500})
    }else{
         return response;
    }
   
}






