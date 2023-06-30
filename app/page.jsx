import React from "react";
import StartSection from "./component/Start section/StartSection";
import Link from "next/link";
import style from "./page.module.css";
import UseUser from "./hook/UseUser";

const Page = () => {
  // const isLogged = false;
  const { isLogged, login}= UseUser()
  return (
    <div>
      {isLogged ? (
        <StartSection />
      ) : (
        <Link href="/login">
          <button className={style.button}>login</button>
        </Link>
      )}

      <Link href="/home">
        <button className={style.button}>Home</button>
      </Link>
    </div>
  );
};

export default Page;
