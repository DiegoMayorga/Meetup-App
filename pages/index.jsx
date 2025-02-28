import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://www.las2orillas.co/wp-content/uploads/2024/09/San-francisco-3.jpg",
    address: "San Francisco's Park",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://bogota.gov.co/sites/default/files/2024-12/8-1.jpg",
    address: "Zipaquirá's Park",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://s2.wklcdn.com/image_183/5516987/43536292/28474784.700x525.jpg",
    address: "Arbelaez's Park",
    description: "This is a third meetup!",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
