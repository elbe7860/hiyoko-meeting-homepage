import MemberIntroduction from "@/components/organisms/MemberIntroduction";
import EventInformation from "@/components/organisms/EventInformation";
import ArtGallary from "@/components/organisms/ArtGallary";

const members = [
  { iconSrc: "/members/kyotan.ico", name: "Kyotan", postName: "リーダー" },
  { iconSrc: "/members/torino.ico", name: "トリノ笹身", postName: "副官" },
  { iconSrc: "/members/namiusa.ico", name: "なみうさ", postName: "参謀長" },
  { iconSrc: "/members/kario.ico", name: "カリオストロ", postName: "アイドル" },
  { iconSrc: "/members/jin.ico", name: "JIN", postName: "管理監督長" },
  { iconSrc: "/members/elbe.ico", name: "ELBE", postName: "情報管理長" },
  { iconSrc: "/members/hebia.ico", name: "ヘビア", postName: "レプタイラー" },
  { iconSrc: "/members/86.ico", name: "ハチロク", postName: "年齢制限枠" },
  { iconSrc: "/members/dark-boruganon.ico", name: "ダークボルガノン", postName: "？？？" },
  // {iconSrc: "/members/nyan.ico", name: "ニャン", postName: "友情出演枠"},
  { iconSrc: "/members/wawawa.ico", name: "わわわ", postName: "チー牛" },
  { iconSrc: "/members/namiusa.ico", name: "神代小蒔", postName: "影武者" },
  { iconSrc: "/members/ban.ico", name: "ばん", postName: "妖精長" },
  { iconSrc: "/members/orochin.ico", name: "おろちん", postName: "妖精" },
]

const eventInformations = [
  {date: "2023/10/29", eventTitle: "第二回！🐥の集会青問", eventBanner: "/event/banner/2.png", description: "🐥の集会の青問が開催されます！今回は「ハロウィン」をテーマに作問しています！"},
  {date: "2023/9/3", eventTitle: "第一回！🐥の集会青問", eventBanner: "/event/banner/1.png", description: "🐥の集会の青問が初開催されます！"},
]

const artGallaryCards = [
  {url: "/artgallary/86/1.png", drawingBy: "ハチロク"},
  {url: "/artgallary/86/2.png", drawingBy: "ハチロク"},
  {url: "/artgallary/86/3.png", drawingBy: "ハチロク"},
]

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-extrabold mx-4 my-8">
        🐥の集会
      </h1>

      <h2 className="text-3xl font-bold mx-4">
        イベント告知
      </h2>

      <div className="px-4 py-2 h-72">
        <EventInformation eventInformations={eventInformations} />
      </div>

      <h2 className="mt-5 text-3xl font-bold mx-4">
        メンバー紹介
      </h2>

      <div className="px-4 py-2">
        <MemberIntroduction members={members} />
      </div>

      <h2 className="mt-5 text-3xl font-bold mx-4">
        イラストギャラリー
      </h2>

      <div className="py-2">
        <ArtGallary arts={artGallaryCards} />
      </div>
    </>
  )
}
