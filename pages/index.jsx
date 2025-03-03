// esta importacion NextJS detecta si no se usa en la funcion componente y no incluye el paquete en
// su cliente.
import MeetupList from "../components/meetups/MeetupList";
import { mongoConnection } from "./api/mongo";

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const { meetupsCollection, client } = await mongoConnection();

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
