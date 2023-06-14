import Providers from "@/store/provider";
import NavBar from "./component/NavBar/NavBar";
import style from "./page.module.css"
import StartSection from "./component/NavBar/Start section/StartSection";

export const metadata = {
  title: "Reac and Morty",
  description: "my frist app with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <Providers>
        <body className={style.containerFull}>
          <main >
          <StartSection />
          <NavBar />
          {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
