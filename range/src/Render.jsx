import { useEffect, useState } from "react";
import { AbsoluteFill, Video, useCurrentFrame, Sequence, Audio, Video, staticFile, Audio, useVideoConfig } from "remotion";
import { Series } from "remotion"

export default function Render({ data }) {

    const path = "http://localhost:8080/" + data.id + "/"
    const root = "http://localhost:8080/source/root/"

    return (
        <AbsoluteFill className=' h-full w-full relative' >
            <Audio src={path + "/title.mp3"} />
            <Audio src={root + "audio.weba"} volume={0.04} />
            <Sequence className="h-full w-full" from={Math.ceil(15 * data.header.duration)}>
                <Series className="h-full w-full bg-w">
                    {data.body.map((val, index) => (
                        <Series.Sequence className="h-full w-full mt-10 relative" durationInFrames={val.duration * 15} >
                            <div style={{ borderWidth: 0 }} className="border-indigo-600 h-max border-8 p-3  rounded-3xl w-11/12 mt-10 mx-auto ">
                                <img src={`${path}/${index}.jpg`} className="rounded-2xl w-full object-cover max-h-[200svh] z-100 object-top" />
                            </div>
                            {/* <div  style={{background: val.colors[0]}} className="h-64 w-64 absolute top-0 right-0 scale-150 rounded-full blur-lg opacity-80 ease-in-out duration-200 -z-10" /> */}
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
            <Video startFrom={20 * (40 + 40)} src={root + "background.mp4"} loop className="h-full w-full object-cover absolute top-0 right-0 -z-20" muted />
        </AbsoluteFill>
    )
}
