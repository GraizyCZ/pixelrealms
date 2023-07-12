import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider"


export const metadata = {
  title: "Pixel Realms",
  description: "Blog Site!"
}

const Rootlayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">

          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout;
