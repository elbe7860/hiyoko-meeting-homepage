import EventCard, { EventCardProps } from "@/components/molecules/EventCard";

export default function EventInformation({
  eventInformations
}: {
  eventInformations: EventCardProps[]
}) {
  return (
    <div className="w-full h-full overflow-auto border border-gray-600">
      {
        eventInformations.map(x => {
          return <EventCard
            date={x.date}
            eventTitle={x.eventTitle}
            description={x.description}
            key={x.eventTitle}
          />
        })
      }
    </div>
  )
}
