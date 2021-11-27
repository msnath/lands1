import "@/styles/_app.scss";
import type { AppProps } from "next/app";
import Footer from "@/components/organisms/Footer/Footer";
import ScrollTopButton from "@/components/molecules/ScrollTopButton/ScrollTopButton";
import React from "react";
import NavContext from "@/contexts/Nav.context";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { useReduxStore } from "@/hooks/useRedux.hook";
import { Provider } from "react-redux";
import S from "@/styles/_app.styled";
import { useNavContextValue } from "@/contexts/Nav.context";
import Header from "@/components/organisms/Header/Header";
import smoothscroll from "smoothscroll-polyfill";
import ToastContext, { useToastContextValue } from "@/contexts/Toast.context";
import Toast from "@/components/atoms/Toast/Toast";

const ReactQueryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useReduxStore(pageProps.initialReduxState);
  const NavContextValue = useNavContextValue();
  const { visible, state, message, setToast } = useToastContextValue();
  const ToastContextValue = { setToast };

  React.useEffect(() => smoothscroll.polyfill(), []);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        <NavContext.Provider value={NavContextValue}>
          <ToastContext.Provider value={ToastContextValue}>
            <QueryClientProvider client={ReactQueryClient}>
              <div id="_app">
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                  />
                  <script
                    defer
                    src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
                  />
                  <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-C5D9GNJE5H"
                  />
                  <script>
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag() { dataLayer.push(arguments); }
                      gtag('js', new Date());
                      gtag('config', 'G-C5D9GNJE5H');
                    `}
                  </script>
                </Head>

                <Header />
                <Component {...pageProps} />
                <ScrollTopButton />
                <Footer />
                <S.Tooltip clickable />
                <Toast visible={visible} state={state} message={message} />
              </div>
            </QueryClientProvider>
          </ToastContext.Provider>
        </NavContext.Provider>
      </Provider>
    </React.StrictMode>
  );
};

export default MyApp;
