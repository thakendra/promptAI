import React from "react";
import Head from "next/head";
import { useState } from "react";
import styles from "./gifts.module.css";

export default function Home() {
  const [category, setGender] = useState("");
  const [color, setAge] = useState("blue");
  const [Environment, setPriceMin] = useState("indoors");
  const [Mood, setPriceMax] = useState("calm");
  const [extra, setHobbies] = useState("");
  const [subject, setSubject] = useState("");
  const [lighting, setLighting] = useState("");
  const [Level, setLevel] = useState("");



  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/generate-gifts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Environment, Mood, category, color, extra,subject, lighting,Level}),
      });
      const data = await response.json();
      setResult(data.result.replaceAll("\n", "<br />"));
    } catch (e) {
      alert("Failed to generate prompt. Try later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Midjourney prompt idea generator 💡</h3>

        <form onSubmit={onSubmit}>
          <label>Give short description</label>
          <input
            type="text"
            name="extra"
            placeholder=""
            value={extra}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <input type="submit" value="Generate prompt" />
        </form>

        {loading && (
          <div>
            <h3>Looking for the best prompt 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
        )}
        {result && (
          <div
            className={styles.result}
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}
      </main>
    </div>
  );
}
