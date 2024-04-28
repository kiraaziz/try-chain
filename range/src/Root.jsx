import "./style.css"

import { Composition } from 'remotion';
import Render from "./Render"
import { json } from "./data.js"

export const RemotionRoot = () => {

	return (
		<Composition
			id="main"
			component={Render}
			durationInFrames={15 * Math.ceil(json.body[json.body.length - 1].endAt)}
			fps={15}
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