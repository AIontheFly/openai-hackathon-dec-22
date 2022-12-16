import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useCallback, useContext, useEffect, useState } from "react";
import Whisper from "./api/whisper";
import Render from "./api/render";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function Home() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [html, setHtml] = useState("");
  const [isSpacePressed, setIsSpacePressed] = useState(0);
  const [isIterating, setIsIterating] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  // add key event listeners when document is loaded
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.addEventListener("keydown", (e) => {
        if (e.code === 'Space' && !isSpacePressed) setIsSpacePressed(1);
      });
      document.body.addEventListener("keyup", (e) => {
        if (e.code === 'Space') setIsSpacePressed(2);
      });
    }
  });
  // Default text
  useEffect(() => {
    if (isIterating) return;
    resetState();
  }, []);
  // send query to API
  const sendQuery = async (prompt: string): Promise<void> => {
    const completion: any = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 1000,
    });
    setResponse(await completion.data.choices[0].text);
    setIsIterating(true);
  };
  // copy contents of HTML to clipboard
  const copyToClipboard = () => {
    if (!html) return;
    navigator.clipboard.writeText(html);
  }
  // isolate HTML from AI response
  const extractHTML = (response) => {
    let start = 0;
    let end = 0;
    for (let i = 0; i < response.length; i++) {
      if (response[i] === "<") {
        const tag = response.slice(i + 1, i + 5);
        if (tag === "html") start = i;
        if (tag === "/htm") {
          end = i + 7;
          break;
        }
      }
    }
    return response.slice(start, end);
  }
  // When response is updated, playback response
  const speak = (response) => {
    if (isMuted) return;
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const sayThis = new SpeechSynthesisUtterance(response);
    sayThis.voice = voices[0]; // 0, 17, 10, 60, 58, 53, 51, 50, 49, 39, 33, 26
    sayThis.rate = 1;
    synth.speak(sayThis);
  };
  // reset state to default
  const resetState = () => {
    const input = (`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Getting Started</title>
      </head>
      <body>
        <div><b>Getting started:</b></div>
        <ul>
        <li>Hold down the mic button or spacebar and speak</li>
        <li>You can say things like "Create a webpage that..."</li>
        <li>After the first webpage render, you can say things like "make the title blue..."</li>
        <li>Press Restart to start with a new webpage</li>
        </ul>
      </body>
    </html>`
      );
      setHtml(input);
      setChatHistory([
      <div className="human"><b>Human</b>: Create a webpage that instructs users how to use Frontend Friend</div>, 
      <div className="AI"><b>AI</b>: Rendering webpage...</div>,
      <div className="AI"><b>AI</b>: Webpage rendered!</div>
    ]);
  };
  useEffect(() => {
    const muteButton = document.querySelector(".mute")
      if (muteButton) muteButton.addEventListener("click", (e) => {
        if (!isMuted) {
          muteButton.setAttribute("style", "background-color: gray");
        } else {
          muteButton.setAttribute("style", "background-color: red");
        }
      });
  }, [isMuted]);
  // mutes AI voice
  const muteVoice = () => {
    !isMuted ? setIsMuted(true) : setIsMuted(false);
  }
  // save user input and send to API
  useEffect(() => {
    if (text === "") return;
    // append prefix to query if render already made
    // if (render) text = "the same webpage but " + text;
    let query = text;
    query = isIterating ? `${html} \nthe above html but `+ text : 'html code for a webpage with ' + text;
    sendQuery(query);
    const fullText = `Human: ${text}`;
    setChatHistory([
      ...chatHistory, 
    <div className="human"><b>Human:</b>{text}</div>,
    <div className="AI"><b>AI:</b>Rendering webpage...</div>
    ]);
    speak(" Rendering webpage...");
    setText("");
  }, [text]);
  // parse and save AI response
  useEffect(() => {
    if (response === "") return;
    // extract html and populate html window
    const extractedHtml = extractHTML(response)
    setHtml(extractedHtml);
    // only record response if no html produced
    if (extractedHtml.length <= 1) {
      setChatHistory([...chatHistory, <div className="AI"><b>AI:</b>{response}</div>]);
      speak(response);
    } else {
      setChatHistory([...chatHistory, <div className="AI"><b>AI:</b>Webpage rendered!</div>]);
      speak("Webpage rendered!");
    }
    setResponse("");
  }, [response]);
  
  //useEffect(() => {}, [html]);

  return (
    <div className={styles.container}>
      <Head>
        {/* <title>INSERT TITLE HERE</title> */}
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <div className="title">
          <button className="restart" onClick={resetState}>restart</button>
          <h1>Front-End Friend</h1>
          <button className="mute" onClick={muteVoice}>🔊</button>
        </div>
        <Whisper setText={setText} isSpacePressed={isSpacePressed}></Whisper>
          <div className="chat-html">
              <div className="chatHistory">{chatHistory}</div>
              <div className="html" onClick={copyToClipboard}>
              <span className="copyToClipboard">📋 <i>Copy to Clipboard </i></span>
                {html}
                </div> 
          </div>
          <div className="render"><Render html={html}></Render></div>
      </main>
    </div>
  );
}
