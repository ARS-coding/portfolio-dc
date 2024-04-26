import 'bootstrap/dist/css/bootstrap.css';
import "../main.css";

export const metadata = {
  metadataBase: new URL('https://ars-coding.netlify.app/'),
  title: 'Riza Sahin',
  description:
    "Experienced and product-oriented Web Engineer that's motivated to learn, unlearn and relearn to grow and excel.",
  openGraph: {
    type: 'website',
    title: 'Riza Sahin',
    description:
      "Experienced and product-oriented Web Engineer that's motivated to learn, unlearn and relearn to grow and excel.",
    url: 'https://ars-coding.netlify.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riza Sahin',
    description:
      "Experienced and product-oriented Web Engineer that's motivated to learn, unlearn and relearn to grow and excel.",
    creator: '@ARS_coding',
    creatorId: '1380277196284104709',
    siteId: '1380277196284104709',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
