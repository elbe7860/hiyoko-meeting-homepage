export type EventCardProps = {
  date: string,
  eventTitle: string,
  description: string,
}

export default function EventCard({
  date,
  eventTitle,
  description,
}: EventCardProps) {
  return (
    <div className="flex flex-col">
      <div className="p-4 md:p-5">
        <p className="text-xs text-gray-600">{date}</p>
        <h3 className="text-lg font-bold text-gray-800">{eventTitle}</h3>
        <p className="mt-2 text-gray-800">{description}</p>
      </div>
      <div className="mx-4 border-b border-b-gray-600"></div>
    </div>
  )
}
