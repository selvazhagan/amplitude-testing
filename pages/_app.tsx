import { useRef } from "react";
import "../styles/global.css";
import type { AppProps } from "next/app";
import * as amplitude from "@amplitude/analytics-browser";

function MyApp({ Component, pageProps }: AppProps) {
  const initialized = useRef<boolean>(false);
  if (!initialized.current) {
    amplitude.init("accesstoken", {
      defaultTracking: {
        pageViews: {
          trackHistoryChanges: "all",
        },
      },
    });
    initialized.current = true;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
