export type MemberCardProps = {
  iconSrc: string,
  name: string,
  postName: string,
}

export default function MemberCard({
  iconSrc,
  name,
  postName,
}: MemberCardProps) {
  return (
    <div className="flex flex-col w-32">
      <img src={iconSrc} alt="メンバーアイコン" />
      <span className="text-center text-lg text-blue-500">{name}</span>
      <span className="text-center text-sm text-gray-500">{postName}</span>
    </div>
  )
}
