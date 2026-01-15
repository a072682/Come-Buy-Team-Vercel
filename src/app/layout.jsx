

//#region
//#endregion

//#region scss區塊
  //#region 自訂義bs5樣式
  import "../scssData/styles/all.scss";
  //#endregion
//#endregion

//#region 引入元件區塊
import AppClientInit from "@/components/AppClientInit/AppClientInit";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import ModalRoot from "@/components/ModalRoot/ModalRoot";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageMask from "@/components/PageMask/PageMask";

//#endregion

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* Material Symbols（Outlined 範例） */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        
        
        <ReduxProvider>
          <AppClientInit />{/* api攔截器 */}
          <PageMask />{/* 遮罩 */}
          <Header />
          {children}
          <Footer />
          <ModalRoot />
        </ReduxProvider>
      </body>
    </html>
  );
}
