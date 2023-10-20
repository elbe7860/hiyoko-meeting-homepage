import ArtGallaryCard, { ArtGallaryCardProps } from "@/components/molecules/ArtGallaryCard";

export type ArtGallaryProps = {
  arts: ArtGallaryCardProps[]
}

export default function ArtGallary({ arts }: ArtGallaryProps) {
  return <div className="px-5 py-10 bg-gray-800 grid grid-cols-1 md:grid-cols-5 gap-y-10 place-items-center">
    {
      arts.map(art => {
        return <ArtGallaryCard
          url={art.url}
          drawingBy={art.drawingBy}
          key={art.url}
        />
      })
    }
  </div>

}
