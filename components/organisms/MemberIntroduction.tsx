import MemberCard, { MemberCardProps } from "@/components/molecules/MemberCard";

export type MemberIntroductionProps = {
  members: MemberCardProps[]
}

export default function MemberIntroduction({ members }: MemberIntroductionProps) {
  return <div className="flex flex-wrap gap-x-8 gap-y-4">
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
