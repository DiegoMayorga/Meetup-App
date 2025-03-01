import MeetupDetail from "../../components/meetups/MeetupDetail";

/* const M1 = {
  id: "m1",
  title: "First Meetup",
  image:
    "https://www.las2orillas.co/wp-content/uploads/2024/09/San-francisco-3.jpg",
  address: "San Francisco's Park",
  description: "This is a first meetup!",
}; */

export default function MeetupDetailPage(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps({ params }) {
  // fetch data

  const meetupId = params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: "m1",
        title: "First Meetup",
        image:
          "https://www.las2orillas.co/wp-content/uploads/2024/09/San-francisco-3.jpg",
        address: "San Francisco's Park",
        description: "This is a first meetup!",
      },
    },
  };
}
