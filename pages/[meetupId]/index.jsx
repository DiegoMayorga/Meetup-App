import MeetupDetail from "../../components/meetups/MeetupDetail";

const M1 = {
  id: "m1",
  title: "First Meetup",
  image:
    "https://www.las2orillas.co/wp-content/uploads/2024/09/San-francisco-3.jpg",
  address: "San Francisco's Park",
  description: "This is a first meetup!",
};

export default function MeetupDetailPage() {
  return (
    <MeetupDetail
      title={M1.title}
      image={M1.image}
      address={M1.address}
      description={M1.description}
    />
  );
}
