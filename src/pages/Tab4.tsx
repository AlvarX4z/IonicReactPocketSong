import React, { useState } from 'react';
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
  IonIcon,
  IonAlert 
} from '@ionic/react';
import { search } from 'ionicons/icons';
import axios from 'axios';
import './Tab4.css';
import { Song } from '../classes/song';

const message: string = "Looking for a song's lyrics?";
const searchButton: string = "Search";

const baseUrl: string = "https://orion.apiseeds.com/api/music/lyric/";
let songNameInput: React.RefObject<HTMLIonInputElement> = React.createRef();
let songArtistInput: React.RefObject<HTMLIonInputElement> = React.createRef();
const clientKey: string = "?apikey=CXS5RvuDuOIy93tsBpSkthRS9CcxjeE5GDYNuCOz0pOAc9v70ImcUjg5EG5d1vHX"

const Tab4: React.FC = () => {

  const [state, setState] = useState({
    artist: "",
    song: "",
    lyrics: "",
    isOpen: false
  });

  const fetchLyrics = async () => {
  
    let finalUrl: string = baseUrl + songArtistInput.current?.value + "/" + songNameInput.current?.value + clientKey;
    axios.get(finalUrl).then(res => {

      let song: Song = res.data;
      state.artist = (song.result?.artist?.name === undefined) ? "Artist Not Found" : song.result?.artist?.name;
      state.song = (song.result?.track?.name === undefined) ? "Song Not Found" : song.result?.track?.name;
      state.lyrics = (song.result?.track?.text === undefined) ? "Lyrics Not Found" : song.result?.track?.text;
      showCustomAlert();
      
    });

  }

  const showCustomAlert = async () => {
    setState({ ...state, isOpen: true });
  }

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
              <IonInput type="text" required ref={songNameInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* 3rd Row - Song Artist Input */}
        <IonRow>
          <IonCol size="10" offset="1">
            <IonItem>
              <IonLabel class="search-label" position="floating" color="warning">Song's Artist</IonLabel>
              <IonInput type="text" required ref={songArtistInput}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        {/* 4th Row - Search Button */}
        <IonRow>
          <IonCol>
            <IonButton className="player-button" shape="round" size="large" onClick={fetchLyrics}>
              <IonIcon icon={search} slot="start" />{searchButton}
            </IonButton>
          </IonCol>
        </IonRow>

      </IonGrid>

      <IonAlert
        isOpen={state.isOpen}
        onDidDismiss={() => setState({ ...state, isOpen: false })}
        header={state.artist + " - " + state.song}
        message={state.lyrics}
        buttons={['Back']}
        cssClass='custom-alert'
      />

    </IonContent>

  </IonPage>
  );
};

export default Tab4;