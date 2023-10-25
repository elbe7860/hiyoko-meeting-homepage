"use client";

import { useState } from "react";

async function copyToClipboard(text: string) {
  await global.navigator.clipboard.writeText(text);

  alert("コマンドをコピーしました！");
}

function extractSpotifyPlaylistId(url: string) {
  const id = url.split("/")[4];

  if (id) {
    return id.split("?")[0];
  } else {
    return "";
  }
}

export default function GuessTheSong() {
  const CORRECT_ANSWER_POINT = 2;
  const [rounds, setRounds] = useState(10);
  const [victoryScore, setVictoryScore] = useState(
    CORRECT_ANSWER_POINT * rounds
  );
  const [roundDelay, setRoundDelay] = useState(5);
  const [roundLength, setRoundLength] = useState(30);
  const [matchPercentage, setMatchPercentage] = useState(85);
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [isAllRound, setIsAllRound] = useState(false);

  return (
    <div>
      <div className="mx-4 my-2 flex flex-col gap-6">
        <div>
          <label
            htmlFor="spotify-url"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            SpotifyプレイリストURL
          </label>
          <input
            type="text"
            id="spotify-url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={spotifyUrl}
            onChange={(e) => setSpotifyUrl(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="rounds"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            ラウンド数
          </label>
          <input
            type="number"
            id="rounds"
            min={10}
            max={100}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={rounds}
            onChange={(e) => setRounds(Number(e.target.value))}
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="is-all-round"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              onChange={(_) => setIsAllRound(!isAllRound)}
              checked={isAllRound}
            />
          </div>
          <label
            htmlFor="is-all-round"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            全問答える
          </label>
        </div>

        <div className={isAllRound ? "hidden" : "block"}>
          <label
            htmlFor="victory-score"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            勝利スコア
          </label>
          <input
            type="number"
            id="victory-score"
            min={1}
            max={500}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={victoryScore}
            onChange={(e) => setVictoryScore(Number(e.target.value))}
          />
        </div>

        <div>
          <label
            htmlFor="round-delay"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            ラウンド間隔（秒）
          </label>
          <input
            type="number"
            id="round-delay"
            min={1}
            max={30}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={roundDelay}
            onChange={(e) => setRoundDelay(Number(e.target.value))}
          />
        </div>

        <div>
          <label
            htmlFor="round-length"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            曲再生時間（秒）
          </label>
          <input
            type="number"
            id="round-length"
            min={1}
            max={300}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={roundLength}
            onChange={(e) => setRoundLength(Number(e.target.value))}
          />
        </div>

        <div>
          <label
            htmlFor="match-percentage"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            回答一致率
          </label>
          <input
            type="number"
            id="match-percentage"
            min={1}
            max={100}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={matchPercentage}
            onChange={(e) => setMatchPercentage(Number(e.target.value))}
          />
        </div>

        <p id="command" className="py-2 px-4 border border-gray-300">
          m!guess the song spotify:playlist:{extractSpotifyPlaylistId(spotifyUrl)} --rounds={rounds} --victory-score={isAllRound ? rounds * CORRECT_ANSWER_POINT : victoryScore * CORRECT_ANSWER_POINT} --round-delay={roundDelay} --round-length={roundLength} --match-percentage={matchPercentage}
        </p>

        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={(_) =>
            copyToClipboard(document.getElementById("command").textContent)
          }
        >
          コピー
        </button>
      </div>
    </div>
  );
}
