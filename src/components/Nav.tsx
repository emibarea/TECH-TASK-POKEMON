import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonImg,
} from "@ionic/react";
import logo from "../assets/logoPokemon.png";

interface Nav {
  currentPage: number;
}

const Navbar: React.FC<Nav> = ({ currentPage }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>

        <IonImg
          src={logo}
          style={{
            width: "200px",
            padding: "8px",
            margin: "auto",
          }}
        />

        <IonButtons
          slot="end"
          style={{ width: "52px", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              border: "1px solid white",
              padding: "4px",
              borderRadius: "5px",
            }}
          >
            {currentPage}
          </div>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
