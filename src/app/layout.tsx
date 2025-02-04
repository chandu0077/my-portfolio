import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Avinash's Portfolio</title>
        <meta
          name="description"
          content="Avinash is an experienced software engineer building scalable systems on
        backend, developing high performant UI on frontend. Open Source
        contributor, Avid learner, Tech blogger actively giving back to
        community"
        ></meta>
        <meta name="keywords" content="Frontend, FullStack Javascript" />
        <meta name="author" content="Avinash DV" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
        ></script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
