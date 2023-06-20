import Providers from "@/store/provider";
import style from "./page.module.css"


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
          {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
