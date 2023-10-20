import MemberCard, { MemberCardProps } from "@/components/molecules/MemberCard";

export type MemberIntroductionProps = {
  members: MemberCardProps[]
}

export default function MemberIntroduction({ members }: MemberIntroductionProps) {
  return <div className="grid grid-cols-2 md:grid-cols-9">
    {
      members.map(member => {
        return <MemberCard
          iconSrc={member.iconSrc}
          name={member.name}
          postName={member.postName}
          key={member.name}
        />
      })
    }
  </div>

}
