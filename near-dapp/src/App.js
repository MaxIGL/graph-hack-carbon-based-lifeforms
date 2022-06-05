import "./App.css";
import { createClient } from "urql";
import { useEffect, useState } from "react";

import logo from "./assets/img/logo.png";
import co2emissionsmap from "./assets/img/co2global.png";
import legend from "./assets/img/legend.png";
import news1 from "./assets/img/news1.jpg";
import news2 from "./assets/img/news2.jpg";
import news3 from "./assets/img/news3.jpg";
import globalCoca from "./assets/img/globalCompany.png";
import emissionCocaEx from "./assets/img/emission.png";
import locCocaEx from "./assets/img/mas.png";
import bg from "./assets/img/bg.jpg";

import pres from "./assets/vid/planet-explorer.mp4";

const APIURL =
  "https://gateway.thegraph.com/api/76fe8eaf2e7243c3acec7f2a430e9991/subgraphs/id/3nXfK3RbFrj6mhkGdoKRowEEti2WvmUdxmz73tben6Mb";

const query = `
  query {
    tokens(
      first: 5
      orderBy: symbol
      orderDirection: desc
    ) {
      id
      name
      symbol
      decimals
    }
  }
`;

const client = createClient({
  url: APIURL,
});


function App() {
  const [result, setResult] = useState("");


  useEffect(() => {
    // fetchData();
    fetchJsonFileCoin();
  }, []);

  // async function fetchData() {
  //   const response = await client.query(query).toPromise();
  //   console.log('response :', response);
  // }


  // FILECOIN DATA

  async function fetchJsonFileCoin() {
    const dataFetch1 = await fetch(
      "https://bafybeiblp4f3wmeilw6v6wevzu5cozl2dupehhrr5x7akyxdfc6hmrkiei.ipfs.dweb.link/10.json",
    ).then((response) => response.text())
    setResult(result + dataFetch1);

    const dataFetch2 = await fetch(
      "https://bafybeigtmgkj3iartvuqmctwt43uzuikaqmvdjoytnnufaudl5fu37ksfi.ipfs.dweb.link/11.json",
    ).then((response) => response.text())
    setResult(result + dataFetch2);

    const dataFetch3 = await fetch(
      "https://bafybeihmnunwupon74x3vzmgxm27bymwu476wtwwdufjzefw6uxphi47se.ipfs.dweb.link/12.json",
    ).then((response) => response.text())
    setResult(result + dataFetch3);
  }



  const detailsCompany = () => {
    const company = document.querySelector(".company-details");
    company.classList.toggle("display-details");
  }

  return (
    <div className="app">
      <header id="header">
        <a href="#"><img className="logo" src={logo} alt="logo" /></a>
        <a href="#ranking">Company Ranking</a>
        <a href="#concentration-map">CO2 concentration map</a>
        <a href="#news">News</a>
        <a href="#">Green Bets</a>
        <a href="#">Bounty Hunting</a>
        <a href="#events">Archives</a>
        <a href="#">DAO</a>
      </header>
      <div className="container">
        <div className="bg-container">
          <div>
            Best CO2 emissions tracking tool,<br /> data issue by satelite
          </div>
        </div>
        <div className="part" id="ranking">
          <h1>Top Greenest Companies of 2022</h1>
          <div className="diff-companies">
            <div className="company" onClick={detailsCompany}>
              <div className="company-header">
                <h2 className="company-rank">1 -</h2>
                <h3 className="company-name">Coca Cola</h3>
              </div>
              <div className="company-body">
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    383t CO2 emitted
                  </div>
                </div>
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    580t CO2 removed
                  </div>
                </div>
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    Score of 87
                  </div>
                </div>
              </div>
              <div className="company-details">
                <img className="globalIndustry" src={globalCoca} alt="Global Coca Industry" />
                <img className="emissionEx" src={emissionCocaEx} alt="Emission Coca Ex" />
                <div className="descrip">
                  <p>Emissions (kg/hr): 445 ± 127 kg/hr</p>
                  <p>Source ID: S00326</p>
                  <p>Location: 35.456964°N, -119.054624°W</p>
                </div>
                <img className="locEx" src={locCocaEx} alt="Localisation Coca Ex" />
              </div>
            </div>


            <div className="company">
              <div className="company-header">
                <h2 className="company-rank">2 -</h2>
                <h3 className="company-name">Patagonia</h3>
              </div>
              <div className="company-body">
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    368t CO2 emitted
                  </div>
                </div>
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    439t CO2 removed
                  </div>
                </div>
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    Score of 85
                  </div>
                </div>
              </div>
            </div>


            <div className="company">
              <div className="company-header">
                <h2 className="company-rank">3 -</h2>
                <h3 className="company-name">Apple</h3>
              </div>
              <div className="company-body">
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    200t CO2 emitted
                  </div>
                </div>
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    650t CO2 removed
                  </div>
                </div>
                <div className="line">
                  <div className="line-score">
                    <div className="complete"></div>
                  </div>
                  <div className="line-data">
                    Score of 79
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="more-soon" id="concentration-map">More soon..</div>
        </div>

        <div className="part">
          <h1>CO2 Concentration map</h1>
          <h2 className="title-map">Global map of CO2 concentration (2020)</h2>
          <img className="global-map" src={co2emissionsmap} />
          <img src={legend} id="news" />
        </div>

        <div className="part">
          <h1>Top News</h1>
          <div className="container-events">
            <div className="post-card-home">
              <img src={news1} alt="Planet FWD" />
              <div className="description-news">
                <span>26 May 2022</span>
                <h3>Planet FWD</h3>
                <p id="events">
                  With $10m in series A funding, the carbon assessment platform Planet FWD hopes to dramatically reduce the time it takes CPG companies to evaluate and neutralize their environmental impact while simultaneously speeding up their development of eco-friendly products that consumers want.
                </p>
              </div>
            </div>

            <div className="post-card-home">
              <img src={news2} alt="Planet FWD" />
              <div className="description-news">
                <span>4 June 2022</span>
                <h3>Brooklyn-based Amogy</h3>
                <p id="events">
                  We’re thrilled to be demonstrating our zero-emission ammonia power solution in action in a tractor for the first time ever. Ammonia is a viable zero-emission fuel for all heavy-duty vehicles, but especially farming and agriculture, where the readily-available chemical has been used as a fertilizer for decades,” Amogy CEO Seonghoon Woo said in a press release about the demonstration.                </p>
              </div>
            </div>

            <div className="post-card-home">
              <img src={news3} alt="Planet FWD" />
              <div className="description-news">
                <span>5 June 2022</span>
                <h3>Conagra Brands</h3>
                <p id="events">
                  In celebration of World Environment Day today, Conagra Brands announced the winners of its annual Sustainable Development Awards, an employee-led program that encourages the development and implementation of innovative ideas related to sustainable production and business practices.              </p>
              </div>
            </div>
          </div>

        </div>

        <div className="part">
          <h1>Archives</h1>
          <div className="container-events">

            <div className="post-card-home">
              <img src="https://bafybeigob234afj4y5yd2ks53mz3yqjqhylpph5wy4754bn5woccrphjdu.ipfs.dweb.link/102381932_bigisland-nc.png" alt="Port fire in Ukrainia" />
              <div className="description-news">
                <span>6 may 2018</span>
                <h3>Eruption on Hawaï</h3>
                <p>
                  In recent weeks, Tropomi has also had a very good view of the major ongoing eruption on Hawaii's Big Island. The instrument has been able to discriminate between the SO2 coming from the main volcanic edifice of Kilauea and those emanating from the troublesome new fissures in the populated Leilani Estates district to the east. Suomi-NPP's Vog data maps perfectly on to Tropomi's direct sensing of SO2.
                </p>
              </div>
            </div>
            <div className="post-card-home">
              <img src="https://bafybeifs347vdf6oyxj75mzfzwgbhunxaejuzseuivsq4fvjjezr72yxw4.ipfs.dweb.link/fire_eubois_greece_20210807_2407-2416_9m_5120px_geo-1-web.jpg" alt="Port fire in Ukrainia" />
              <div className="description-news">
                <span>August 7 2021</span>
                <h3>Huge fire across the island of Evia</h3>
                <p>
                  Fires swept across the Greek island of Evia (also known as Euboea) in early August of 2021, covering the region in smoke and leaving behind an enormous burn scar (for a sense of scale, this image is 46 by 35 kilometers across). Planet’s monitoring constellation captured this view of the fires just after noon on August 7, 2021. In some areas, the flames were so intense they generated clouds, called pyrocumulus clouds.
                </p>
              </div>
            </div>
            <div className="post-card-home">
              <img src="https://bafybeiadg6ueca43taimimr3sgd2uy4miic7ml6tocjbjbzit2dkujzk7m.ipfs.dweb.link/fire_port_berdiansk_ukraine_20220324_240a_rgb_flat_3m_1920px_logo_geo-1-web.jpg" alt="Port fire in Ukrainia" />
              <div className="description-news">
                <span>March 24 2022</span>
                <h3>Port Fire in Berdiansk in Ukrainia</h3>
                <p>
                  Imagery collected on March 24, 2022, shows a large plume of dark smoke rising from the port of Berdyansk, Ukraine, after a reported strike on Russian ships. Imagery from March 22, 2022, shows the area two days prior.
                </p>
              </div>
            </div>

          </div>

        </div>




        <div className="part">
          <h1>Green Bets</h1>
          <div className="soon">
            Coming soon..
          </div>
        </div>


        <div className="part">
          <h1>Bounty Hunting</h1>
          <div className="soon">
            Coming soon..
          </div>
        </div>

        <div className="part">
          <h1>DAO</h1>
          <div className="soon">
            Coming soon..
          </div>
        </div>
      </div>
      <footer>©Copyrigth 2022 - Carbon Based Lifeforms</footer>
    </div>
  );
}

export default App;
