import React, { useState } from "react";

import {
  setupIonicReact,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonMenuToggle,
} from "@ionic/react";

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

setupIonicReact();
const ITEMS_PER_PAGE = 10;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(200 / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Paginación</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <IonButton
                key={page}
                onClick={() => handlePageChange(page)}
                color={currentPage === page ? "primary" : "medium"}
              >
                <IonMenuToggle style={{ width: "100%", height: "100%" }}>
                  {page}
                </IonMenuToggle>
              </IonButton>
            ))}
          </div>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <Navbar />
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Body currentPage={currentPage} />
        </IonContent>
        <Footer />
      </IonPage>
    </>
  );
};

export default App;
