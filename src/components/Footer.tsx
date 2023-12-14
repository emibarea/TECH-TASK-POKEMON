import { IonFooter, IonToolbar, IonTitle, IonIcon } from "@ionic/react";
const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle style={{ textAlign: "center" }}>
          Developed by Emiliano Barea.
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
