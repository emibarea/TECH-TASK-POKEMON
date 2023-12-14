import React, { useState } from "react";

import { setupIonicReact, IonContent, IonPage } from "@ionic/react";

import Body from "./components/Body";
import Navbar from "./components/Nav";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

setupIonicReact();

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 16;
  const totalPages = Math.ceil(400 / ITEMS_PER_PAGE); // 400 son los pokemons que traigo de la api

  return (
    <>
      <Menu
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <IonPage id="main-content">
        <Navbar currentPage={currentPage} />
        <Body currentPage={currentPage} ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
        <Footer />
      </IonPage>
    </>
  );
};

export default App;
