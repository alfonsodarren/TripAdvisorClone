import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSegment, IonSegmentButton, IonText } from '@ionic/react';
import { documentTextOutline, heart, locationOutline, personAddOutline } from 'ionicons/icons';
import { useState } from 'react';
import React from 'react';
import './Plan.css';

const Plan: React.FC = () => {
  const [segment, setSegment] = useState<'Trips' | 'Saves' | 'Bookings'>('Trips')
  const [text, setText] = useState<string>("");
  const onSegmentChange = (event: any) => {
    setSegment(event.detail.value)
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="main">
          <IonRow>
            <IonCol className="ion-padding-top ion-padding-start">
              <h1>Plan</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonRow className="segmentation ion-padding-start">
              <IonSegment value={segment} onIonChange={onSegmentChange}>
                <IonSegmentButton value="Trips">
                  <IonLabel>
                    Trips
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Saves">
                  <IonLabel>
                    Saves
                  </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Bookings">
                  <IonLabel>
                    Bookings
                  </IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonRow>
          </IonRow>
          {segment == 'Trips' ? (<div>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol className="no-padding">
              <IonList className="trips">
                <IonItem color="white" lines="none">
                  <IonAvatar slot="start">
                    <IonIcon color="only" icon={heart} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Save places you'd like to visit</h2>
                  </IonLabel>
                </IonItem>
                <IonItem color="white" lines="none">
                  <IonAvatar slot="start">
                    <IonIcon color="only" icon={locationOutline} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>See your saves on a map</h2>
                  </IonLabel>
                </IonItem>
                <IonItem color="white" lines="none">
                  <IonAvatar slot="start">
                    <IonIcon color="only" icon={documentTextOutline} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Keep track of notes, links, and more</h2>
                  </IonLabel>
                </IonItem>
                <IonItem color="white" lines="none">
                  <IonAvatar slot="start">
                    <IonIcon color="only" icon={personAddOutline} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Share and collaborate on your phone</h2>
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-padding-start">
              <p>Trip Name</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="trip-name">
                <IonInput maxlength={50} value={text} placeholder="Ex: Weekend in NYC" onIonChange={e => setText(e.detail.value!)} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-padding-horizontal">
              <IonButton expand="block" size="large" fill="solid" shape="round" color="dark" disabled={text != "" ? false : true}>
                Create a Trip
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div className="ion-text-center underline ion-padding-top">
                Log in to access your {segment}
              </div>
            </IonCol>
          </IonRow></div>) : segment == 'Saves' ? (<div>
          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <p><b>No saves yet</b></p>
                <p>Places you save will appear here.</p>
                <p className="underline ion-padding-top">Log in to access your {segment}</p>
              </div>
            </IonCol>
          </IonRow></div>) : (<div>
          <IonRow className="ion-padding-top">
            <IonCol className="ion-padding-top">
              <div className="ion-text-center underline ion-padding-top">
                Log in to access your {segment}
              </div>
            </IonCol>
          </IonRow></div>)}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Plan;