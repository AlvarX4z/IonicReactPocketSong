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
import axios from 'axios';
import './Tab4.css';

const message: string = "Looking for a song's lyrics?";
const searchButton: string = "Search";

const baseUrl: string = "https://orion.apiseeds.com/api/music/lyric/";
let songName: React.RefObject<HTMLIonInputElement> = React.createRef();
let songArtist: React.RefObject<HTMLIonInputElement> = React.createRef();
const clientKey: string = "?apikey=CXS5RvuDuOIy93tsBpSkthRS9CcxjeE5GDYNuCOz0pOAc9v70ImcUjg5EG5d1vHX"

let state = {
  songs: []
}

const buildURL = () => {

  let finalUrl: string = baseUrl + songArtist.current?.value + "/" + songName.current?.value + clientKey;
  axios.get(finalUrl).then(res => {
    const songs = res.data;
    state.songs = songs;
  });
  // console.log(state.songs.map(song => song.result.track.name));
}

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
              <IonInput type="text" required ref={songName}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* 3rd Row - Song Artist Input */}
        <IonRow>
          <IonCol size="10" offset="1">
            <IonItem>
              <IonLabel class="search-label" position="floating" color="warning">Song's Artist</IonLabel>
              <IonInput type="text" required ref={songArtist}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* 4th Row - Search Button */}
        <IonRow>
          <IonCol>
            <IonButton className="player-button" shape="round" size="large" onClick={buildURL}>
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