import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";


// take voice input from user and convert to text
export default function Render(props) {
  const { html } = props;
  return (
    <div>
      <div className="render" dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  );
};