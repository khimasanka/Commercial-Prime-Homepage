import Navbar from '../components/navbar/Navbar';
import Home from '../components/body/Home';
import '../styles/globals.css';
import Card from '../components/card/Card';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        {/* <Card/> */}
        <Home/>
        {children}
      </body>
    </html>
  )
}
