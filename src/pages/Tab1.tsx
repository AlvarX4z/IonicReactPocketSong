import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonImg, 
  IonFooter 
} from '@ionic/react';
import './Tab1.css';

const logoPath: string = 'assets/img/music.png';
const appName: string = "PocketSong";
const homeText1: string = "Listen to your local music files";
const homeText2: string = "Search lyrics and info about them";
const homeText3: string = "Whenever and wherever you want to!";
const footerText: string = "Training App by Alvaro de Francisco Sanchez";

const Tab1: React.FC = () => {
  return (
    <IonPage>

      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Home Content */}
      <IonContent fullscreen>

        {/* For iOS */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>

        {/* 1st Grid Row - Logo */}
        <IonRow>
          <IonCol size="8" offset="2">
            <IonImg id="home-logo" src={logoPath}></IonImg>
          </IonCol>
        </IonRow>

        {/* 2nd Grid Row - Text */}
        <IonRow>
          <IonCol id="col-text" size="10" offset="1">
            <h1 id="home-header">{appName}</h1>
            <p>{homeText1}</p>
            <p>{homeText2}</p>
            <p>{homeText3}</p>
          </IonCol>
        </IonRow>

        </IonGrid>

      </IonContent>

      {/* Footer */}
      <IonFooter>
        <IonToolbar>
          <IonTitle id="footer-text">{footerText}</IonTitle>
        </IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default Tab1;
