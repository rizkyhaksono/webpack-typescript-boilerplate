import Header from "./header"
import Footer from "./footer"

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
