import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Search.css';
import { search } from 'ionicons/icons';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="main">
          <IonRow>
            <IonCol className="ion-padding-top ion-padding-start">
              <h1>Search</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-padding-top">
              <IonItem className="search-bar">
                <IonIcon className="ion-padding-end" icon={search} />
                <IonInput placeholder="Where to?" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="ion-text-center green ion-margin-vertical">
                <IonCardContent className="ion-padding-vertical ion-margin-vertical">
                  <h1 className="ion-padding-bottom">See what's good nearby.</h1>
                  <IonButton shape="round" fill="outline" size="large" color="only">Turn on location settings</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h2 className="ion-padding-start">Destinations travelers love</h2>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-horizontal ion-justify-content-center ion-align-items-center">
            <IonCol size="6" className="ion-padding-top">
              <div className="search-place">
                <IonImg src="https://images.pexels.com/photos/3583571/pexels-photo-3583571.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <IonLabel className="overlay">New York City</IonLabel>
              </div>
            </IonCol>
            <IonCol size="6" className="ion-padding-top">
              <div className="search-place">
                <IonImg src="https://images.pexels.com/photos/1212956/pexels-photo-1212956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <IonLabel className="overlay">Singapore</IonLabel>
              </div>
            </IonCol>
            <IonCol size="6" className="ion-padding-top">
              <div className="search-place">
                <IonImg src="https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <IonLabel className="overlay">Rome</IonLabel>
              </div>
            </IonCol>
            <IonCol size="6" className="ion-padding-top">
              <div className="search-place">
                <IonImg src="https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <IonLabel className="overlay">Paris</IonLabel>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Search;