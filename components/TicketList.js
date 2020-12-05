export default function TicketList({ slots = [] }) {

  return slots.map(({ Name, Description }) => (
    <>
      <div>Name : {Name}</div>
      <div>Description: {Description}</div>
    </>
  ));
}
