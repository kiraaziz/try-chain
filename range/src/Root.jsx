import "./style.css"

import { Composition } from 'remotion';
import Render from "./Render"
export const RemotionRoot = () => {

	return (
		<Composition
			id="main"
			component={Render}
			durationInFrames={20 * Math.ceil(json.body[json.body.length - 1].endAt)}
			fps={20}
			height={1920}
			width={1080}
			calculateMetadata={async () => {
				// const data = await fetch("http://172.17.112.1:8080/data.json", {
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	}
				// })
				// const json = await data.json();

				return {
					props: {
						data: json,
					},
				};
			}}
		/>
	)
};

export const json = {
	"header": {
		"text": "7 Mind Blowing Facts",
		"background": "",
		"audioPath": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/title.mp3",
		"startAtEndAt": 0,
		"endAt": 2.28,
		"duration": 2.28
	},
	"body": [
		{
			"content": "The Great Barrier Reef is the largest living structure on Earth, stretching over 1,400 miles and containing an estimated 1.5 trillion individual organisms.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/0.gif",
			"colors": [
				"#32202e",
				"#cea09a",
				"#8a4347",
				"#a4a0a0",
				"#6b64b8"
			],
			"duration": 11.256,
			"startAt": 2.28,
			"endAt": 13.536
		},
		{
			"content": "A single blue whale's heart weighs as much as an automobile, and it beats only around 10-15 times per minute.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/1.gif",
			"colors": [
				"#b28577",
				"#241615",
				"#e6dbd7",
				"#693c32",
				"#774d3c"
			],
			"duration": 7.368,
			"startAt": 13.536,
			"endAt": 20.904
		},
		{
			"content": "The largest waterfall in the world, the Angel Falls in Venezuela, is over 3,200 feet tall and drops water from a height greater than Niagara Falls and Victoria Falls combined.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/2.gif",
			"colors": [
				"#dedede",
				"#2c2c2c",
				"#646464",
				"#898989",
				"#747474"
			],
			"duration": 12.72,
			"startAt": 20.904,
			"endAt": 33.624
		},
		{
			"content": "The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 35 minutes.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/3.gif",
			"colors": [
				"#756358",
				"#d2cdca",
				"#a59e97",
				"#ca7f69",
				"#cbb4a8"
			],
			"duration": 9.216,
			"startAt": 33.624,
			"endAt": 42.84
		},
		{
			"content": "The largest volcanic eruption in recorded history was the 1815 eruption of Mount Tambora in Indonesia, which caused the 'Year Without a Summer' in 1816, with temperatures dropping worldwide.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/4.gif",
			"colors": [
				"#bcaca8",
				"#0e0908",
				"#4b3734",
				"#644c4c",
				"#442c1c"
			],
			"duration": 12.576,
			"startAt": 42.84,
			"endAt": 55.416000000000004
		},
		{
			"content": "The largest snowflake ever recorded was 15 inches wide and 8 inches thick, and was found in Montana, USA, in 1887.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/5.gif",
			"colors": [
				"#acb1b4",
				"#305b82",
				"#93963d",
				"#6287a5",
				"#5c7474"
			],
			"duration": 9.96,
			"startAt": 55.416000000000004,
			"endAt": 65.376
		},
		{
			"content": "The oldest known tree in the world is a bristlecone pine tree named Methuselah, located in the White Mountains of California, and is over 4,800 years old.",
			"image": "source/7-really-mind-blowing-facts-in-diffrent-area-and-in-diffrent-structure-1714307680046/6.gif",
			"colors": [
				"#4e6f49",
				"#d3dec1",
				"#040405",
				"#90bdaa",
				"#74acbc"
			],
			"duration": 10.824,
			"startAt": 65.376,
			"endAt": 76.2
		}
	]
}