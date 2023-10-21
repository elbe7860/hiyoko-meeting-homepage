export type EventCardProps = {
  date: string,
  eventTitle: string,
  eventBanner: string,
  description: string,
}

export default function EventCard({
  date,
  eventTitle,
  eventBanner,
  description,
}: EventCardProps) {
  return (
    <div className="flex flex-col">
      <div className="px-4 md:px-5">
        <p className="text-xs text-gray-600">{date}</p>
        <h3 className="text-lg font-bold text-gray-800">{eventTitle}</h3>
        <p className="mt-2 text-gray-800">{description}</p>
      </div>
      <div className="pt-1 pb-4 px-4 md:px-5">
        <img className="w-72 border border-gray-600" src={eventBanner} alt="イベント広告バナー" />
      </div>
      <div className="mx-4 border-b border-b-gray-600"></div>
    </div>
  )
}
