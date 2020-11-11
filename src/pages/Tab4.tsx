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
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon 
} from '@ionic/react';
import { search } from 'ionicons/icons';
import './Tab4.css';

const message: string = "Looking for a song's lyrics?";
const searchButton: string = "Search";

const baseUrl: string = "https://orion.apiseeds.com/api/music/lyric/";
let songName: string = '';
let songArtist: string = ''; 
const clientKey: string = "?apikey=CXS5RvuDuOIy93tsBpSkthRS9CcxjeE5GDYNuCOz0pOAc9v70ImcUjg5EG5d1vHX"
let finalUrl: string;

const Tab4: React.FC = () => {
  return (
    <IonPage>

    {/* Header */}
    <IonHeader>
      <IonToolbar>
        <IonTitle>Search</IonTitle>
      </IonToolbar>
    </IonHeader>

    {/* Player Content */}
    <IonContent fullscreen>

      {/* For iOS */}
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Search</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid>

        {/* 1st Row - Message */}
        <IonRow>
          <IonCol id="search-col-message">
            <p id="search-message">{message}</p>
          </IonCol>
        </IonRow>

        {/* 2nd Row - Song Name Input */}
        <IonRow>
          <IonCol size="10" offset="1">
            <IonItem>
              <IonLabel class="search-label" position="floating" color="warning">Song's Name</IonLabel>
              <IonInput type="text" required ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* 3rd Row - Song Artist Input */}
        <IonRow>
          <IonCol size="10" offset="1">
            <IonItem>
              <IonLabel class="search-label" position="floating" color="warning">Song's Artist</IonLabel>
              <IonInput type="text" required></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* 4th Row - Search Button */}
        <IonRow>
          <IonCol>
            <IonButton className="player-button" shape="round" size="large">
              <IonIcon icon={search} slot="start" />{searchButton}
            </IonButton>
          </IonCol>
        </IonRow>

      </IonGrid>

    </IonContent>

  </IonPage>
  );
};

export default Tab4;