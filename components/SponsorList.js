export default function SponsorList({ sponsors = [] }) {

  return sponsors.map(({ Name, SponsorshipLevel }) => (
    <>
      <div>Name : {Name}</div>
      <div>Level: {SponsorshipLevel}</div>
    </>
  ));
}
