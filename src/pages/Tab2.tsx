import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { musicalNote } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>

      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Songs</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Songs Content */}
      <IonContent fullscreen>

        {/* For iOS */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Songs</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <IonItem className="songs-item" lines="full">
            <IonIcon className="songs-item-icon" icon={musicalNote} size="large" slot="start" />
            <IonLabel>
              <h1>Song Name</h1> 
              <h2>Song Artist</h2>
            </IonLabel>
          </IonItem>

          <IonItem className="songs-item" lines="full">
            <IonIcon className="songs-item-icon" icon={musicalNote} size="large" slot="start" /> 
            <IonLabel>
              <h1>Song Name</h1> 
              <h2>Song Artist</h2>
            </IonLabel>
          </IonItem>

        </IonList>

      </IonContent>

    </IonPage>
  );
};

export default Tab2;