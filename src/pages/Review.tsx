import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import './Review.css';

const Review: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="main">
          <IonRow>
            <IonCol className="ion-padding-top ion-padding-start">
              <h1>Review</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="ion-text-center review-card ion-padding-vertical ion-margin-top">
                <IonCardContent>
                  <IonButton className="" shape="round" fill="solid" size="large" color="dark">Write a review</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="ion-text-center upload-card ion-padding-vertical">
                <IonCardContent>
                  <IonButton className="" shape="round" fill="solid" size="large" color="dark">Upload a photo</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Review;