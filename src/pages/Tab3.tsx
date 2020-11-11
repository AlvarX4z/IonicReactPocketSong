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
  IonIcon,
  IonProgressBar,
  IonButton
} from '@ionic/react';
import { musicalNotes, pause, play, stop } from 'ionicons/icons';
import './Tab3.css';

const pauseSong = () => {
  console.log("PAUSED");
}

const playSong = () => {
  console.log("PLAYING");
}

const stopSong = () => {
  console.log("STOPPED");
}

const Tab3: React.FC = () => {
  return (
    <IonPage>

    {/* Header */}
    <IonHeader>
      <IonToolbar>
        <IonTitle>Player</IonTitle>
      </IonToolbar>
    </IonHeader>

    {/* Player Content */}
    <IonContent fullscreen>

      {/* For iOS */}
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Player</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid>

        {/* 1st Grid Row - Musical Note Icon */}
        <IonRow>
          <IonCol size="12">
            <IonIcon id="player-icon" icon={musicalNotes} />
          </IonCol>
        </IonRow>

        {/* 2nd Grid Row - Song Name and Artist */}
        <IonRow>
          <IonCol className="player-col">
            <p id="player-song-name">Song Name Placeholder</p>
            <p id="player-song-artist">Song Group Placeholder</p>
          </IonCol>
        </IonRow>

        {/* 3rd Grid Row - Progress Bar */}
        <IonRow>
          <IonCol size="10" offset="1">
            <IonProgressBar id="player-progress-bar"></IonProgressBar>
          </IonCol>
        </IonRow>

        {/* 4th Grid Row - Player Buttons */}
        <IonRow>

          {/* 1st Column - Pause Button */}
          <IonCol>
            <IonButton className="player-button" shape="round" size="large" onClick={pauseSong}>
              <IonIcon icon={pause} />
            </IonButton>
          </IonCol>

          {/* 2nd Column - Play Button */}
          <IonCol>
            <IonButton className="player-button" shape="round" size="large" onClick={playSong}>
              <IonIcon icon={play} />
            </IonButton>
          </IonCol>

          {/* 3rd Column - Stop Button */}
          <IonCol>
            <IonButton className="player-button" shape="round" size="large" onClick={stopSong}>
              <IonIcon icon={stop} />
            </IonButton>
          </IonCol>

        </IonRow>

      </IonGrid>

    </IonContent>

  </IonPage>
  );
};

export default Tab3;
