import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useState, useMemo, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import FormData from "form-data";

// take voice input from user and convert to text
export default function Whisper(props) {
  const { setText, isSpacePressed } = props;
  const recorder = useMemo(() => new MicRecorder({ bitRate: 128 }), []);
  // activate when space is pressed or depressed
  useEffect(() => {
    if (isSpacePressed === 1) mouseDownHandler();
    if (isSpacePressed === 2) mouseUpHandler();
  }, [isSpacePressed]);
  // begin recording when button is held down
  const mouseDownHandler = () => {
    const recordButton = document.querySelector('.recordButton');
    if (recordButton) recordButton.setAttribute("class", "recordButtonON");
    recorder.stop();
    recorder
      .start()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };
  // end recording when mouse button is released
  const mouseUpHandler = () => {
    const recordButton = document.querySelector('.recordButtonON');
    if (recordButton) recordButton.setAttribute("class", "recordButton");
    
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "voice.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });
        const formdata = new FormData();
        formdata.append("audio_file", file, "voice.mp3");
        const requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
        fetch("https://whisper.lablab.ai/asr", requestOptions)
          .then((response) => response.text())
          .then((result) => setText(JSON.parse(result).text))
          .catch((error) => {
            console.log("error", error)
            alert("Bad recording, please try again.");
          });
      })
      .catch((e) => {
        alert("We could not retrieve your message");
        console.log(e);
      });
   
  };

  return (
    <div>
      <button className="recordButton" onMouseUp = {mouseUpHandler} onMouseDown = {mouseDownHandler}>Record</button>
    </div>
  );
};