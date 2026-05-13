import { useState } from 'react'
import stfcLogo from './assets/stfcLogo.png'
import ICARUSLogo from './assets/ICARUSlogo.png'
import DocumentList from './documentList'
import TileChooser from './tileChooser'
import DocLoader from './DocLoader'
import {Footer} from './footer'
import './App.css'
import './globals.css'

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <section>
        <div className="hero">
          <img src={ICARUSLogo} className="icarusLogo" alt="Icarus logo" />
          <img src={stfcLogo} className="stfcLogo" alt="stfc logo" />
        </div>
        <div>
          <h1></h1>
          <p>
            Please choose an app to view support documentation
          </p>
        </div>
      </section>

      <section>
        <TileChooser />
      </section>

      <section>
        <DocLoader data={data} setData={setData}/>
      </section>

      <section id='documentList'>
        <DocumentList />
      </section>

    <section>
        <Footer />
     </section>

    </>
  )
}

export default App
