import React, { useEffect, useState } from 'react';
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
import { Plugins, FilesystemDirectory } from '@capacitor/core';
import './Tab2.css';

const { Filesystem } = Plugins;

const Tab2: React.FC = () => {
  
  //crea una interface con los que te devuelva en el any 
  const [song, setSong] = useState<string[]>([]);
  
  const readMusicDirectory = async () => {
    try {
      const list = await Filesystem.readdir({
        path: '/',
        directory: FilesystemDirectory.Documents
      });
      setSong(list.files);
    } catch (e) { console.error('Unable to read dir', e); }
  }
  
  useEffect(() => { readMusicDirectory(); }, []);

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
          {song.map((item) => {
            return (
              <IonItem className="songs-item" lines="full">
                <IonIcon className="songs-item-icon" icon={musicalNote} size="large" slot="start" />
                <IonLabel>
                  <h1>{item}</h1>
                  <h2>Unknown Artist</h2>
                </IonLabel>
              </IonItem>
              )
            })}
          </IonList>
  
        </IonContent>
  
    </IonPage>
  );
};
export default Tab2;