import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useState, useMemo, useEffect } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import FormData from "form-data";

export default function Whisper(props) {

  const { setText } = props;

  let isRecorded = false;

  const recorder = useMemo(() => new MicRecorder({ bitRate: 128 }), []);
  
  const recordHandler = () => {
    isRecorded = true;
    recorder.stop();
    recorder.start().then(() => {
      // something else
    }).catch((e) => {
      console.error(e);
    });
  };

  const stopHandler = () => {
    recorder.stop();

    if (!isRecorded) {
      console.log('Please record before stopping...');
      return;
    }
    isRecorded = false;
    recorder
    .stop()
    .getMp3().then(([buffer, blob]) => {
      // do what ever you want with buffer and blob
      // Example: Create a mp3 file and play
      const file = new File(buffer, 'voice.mp3', {
        type: blob.type,
        lastModified: Date.now()
      });

      const formdata = new FormData();

      formdata.append("audio_file", file, 'voice.mp3');
      // console.log(file)
      // console.log(formdata)
      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://whisper.lablab.ai/asr", requestOptions)
        .then(response => response.text())
        .then(result => setText(JSON.parse(result).text))
        .catch(error => console.log('error', error));

    
      const player = new Audio(URL.createObjectURL(file));
      player.play();
    
    }).catch((e) => {
      alert('We could not retrieve your message');
      console.log(e);
    });

  };

  return (
    <>
      <Head>
        <title>Whisper</title>
      </Head>
      <button onClick = {recordHandler}>Record</button>
      <button onClick = {stopHandler}>Stop</button>
    </>
  );
}
