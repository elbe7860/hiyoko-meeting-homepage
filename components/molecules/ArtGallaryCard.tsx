export type ArtGallaryCardProps = {
  url: string,
  drawingBy: string,
}

export default function ArtGallaryCard({
  url,
  drawingBy,
}: ArtGallaryCardProps) {
  return (
    <div>
      <img
        className="flex flex-row h-96 border-double border-8 bg-orange-700 border-orange-900 hover:shadow-lg hover:shadow-gray-100"
        src={url}
      />
      <p className="mt-2 text-gray-200 text-center">絵師：{drawingBy}</p>
    </div>
  )
}
