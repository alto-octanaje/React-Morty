import React from "react";
import StartSection from "./component/Start section/StartSection";
import Link from "next/link";
import style from "./page.module.css";

const Page = () => {
  return (
    <div>
      <StartSection />

      <Link href="/login">
        <button className={style.button}>login</button>
      </Link>
      <Link href="/home">
        <button className={style.button}>Home</button>
      </Link>
    </div>
  );
};

export default Page;
