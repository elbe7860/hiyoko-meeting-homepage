import MemberCard from "components/atoms/MemberCard";

const members = [
  {iconSrc: "/members/kyotan.ico", name: "Kyotan", postName: "リーダー"},
  {iconSrc: "/members/torino.ico", name: "トリノ笹身", postName: "副官"},
  {iconSrc: "/members/namiusa.ico", name: "なみうさ", postName: "参謀長"},
  {iconSrc: "/members/kario.ico", name: "カリオストロ", postName: "アイドル"},
  {iconSrc: "/members/jin.ico", name: "JIN", postName: "管理監督長"},
  {iconSrc: "/members/elbe.ico", name: "ELBE", postName: "情報管理長"},
  {iconSrc: "/members/hebia.ico", name: "ヘビア", postName: "レプタイラー"},
  {iconSrc: "/members/86.ico", name: "ハチロク", postName: "年齢制限枠"},
  {iconSrc: "/members/dark-boruganon.ico", name: "ダークボルガノン", postName: "？？？"},
  // {iconSrc: "/members/nyan.ico", name: "ニャン", postName: "友情出演枠"},
  {iconSrc: "/members/wawawa.ico", name: "わわわ", postName: "チー牛"},
  {iconSrc: "/members/namiusa.ico", name: "神代小蒔", postName: "影武者"},
  {iconSrc: "/members/ban.ico", name: "ばん", postName: "妖精"},
]

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-extrabold mx-4 my-8">
        🐥の集会
      </h1>

      <h2 className="text-3xl font-bold mx-4">
        メンバー紹介
      </h2>

      <div className="flex flex-wrap gap-x-8 gap-y-4 px-4 py-2">
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
    </>
  )
}
