import { useEffect, useState } from "react";
import { AbsoluteFill, Video, useCurrentFrame, Sequence, Audio, Video, staticFile, Audio, useVideoConfig } from "remotion";
import { Series } from "remotion"

export default function Render({ data }) {

    const path = "http://localhost:8080/workUp1/"

    return (
        <AbsoluteFill className=' h-full w-full relative' >
            <Audio src={path + "/title.mp3"} />
            <Audio src={path + "/audio.weba"} volume={0.1} />
            <Sequence className="h-full w-full" from={Math.ceil(20 * data.header.duration)}>
                <Series className="h-full w-full bg-w">
                    {data.body.map((val, index) => (
                        <Series.Sequence className="h-full w-full mt-20" durationInFrames={val.duration * 20} >
                                <div className="h-max border-8 p-3 border-indigo-500 rounded-3xl w-5/6 mt-10 mx-auto">
                                    <img src={`${path}/${index}.gif`} className="rounded-2xl w-full object-cover max-h-[70svh] object-top" />
                                </div>
                            <Audio src={path + "/" + index + ".mp3"} />
                        </Series.Sequence>
                    ))}
                </Series>
            </Sequence>
            {/* {data.body.map((val, index) => (
                <>
                    <Sequence from={Math.floor(val.startAt * 45)} >
                        <Audio caption src={path + "/" + index + ".mp3"} />
                        <Audio caption src={path + "/" + index + ".mp3"} />
                    </Sequence>
                    {frame > (val.startAt * 60) && frame < val.endAt * 60 &&
                        <div className="">
                            <div className="h-max border-8 p-3 border-indigo-500 rounded-3xl w-5/6 mt-10 mx-auto">
                                <img src={`${path}/${index}.gif`} className="rounded-2xl w-full object-cover" />
                            </div>
                        </div>
                    }
                </>

            ))} */}
            <Video src={path + "background.mp4"} loop className="h-full w-full object-cover absolute top-0 right-0 -z-20" />
        </AbsoluteFill>
    )
}
