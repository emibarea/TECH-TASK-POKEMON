import React from "react";
import {
  IonMenu,
  IonTitle,
  IonButton,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonContent,
} from "@ionic/react";

interface Home {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Menu: React.FC<Home> = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (page: number) => (
              <IonButton
                key={page}
                onClick={() => handlePageChange(page)}
                color={currentPage === page ? "primary" : "medium"}
              >
                <IonMenuToggle style={{ width: "100%", height: "100%" }}>
                  {page}
                </IonMenuToggle>
              </IonButton>
            )
          )}
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
