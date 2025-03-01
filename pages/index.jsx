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
    image: "https://bogota.gov.co/sites/default/files/2024-12/8-1.jpg",
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

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API...
  return {
    props: DUMMY_MEETUPS,
  };
} */

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}
