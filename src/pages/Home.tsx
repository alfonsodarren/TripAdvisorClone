import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow } from '@ionic/react';
import { bedOutline, chatbubblesOutline, restaurantOutline, ticketOutline } from 'ionicons/icons';
import CardImage from '../components/CardImage';
import Carousel from '../components/Carousel';
import './Home.css';
import React from 'react';

const Home: React.FC = () => (
  <IonPage>
    <IonContent fullscreen>
      <IonGrid className="main" color="light">
        <IonRow className="yellow ion-justify-content-center ion-align-items-center">
          <IonCol className="ion-padding-start">
            <h1>Explore</h1>
          </IonCol>
          <IonCol>
            <IonAvatar className="ion-float-right">
              <IonImg src="assets/user.svg" />
            </IonAvatar>
          </IonCol>
        </IonRow>
        <IonRow className="yellow">
          <IonCol className="carousel ion-text-nowrap">
            <IonButton size="large" color="only" shape="round">
              <IonIcon icon={bedOutline} />
              Hotels
            </IonButton>
            <IonButton size="large" color="only" shape="round">
              <IonIcon icon={ticketOutline} />
              Things to do
            </IonButton>
            <IonButton size="large" color="only" shape="round">
              <IonIcon icon={restaurantOutline} />
              Restaurants
            </IonButton>
            <IonButton size="large" color="only" shape="round">
              <IonIcon icon={chatbubblesOutline} />
              Forums
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="yellow">
          <IonCol>
            <IonImg className="welcome" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Beach_rvmg.svg" />
          </IonCol>
        </IonRow>
        <IonRow class="empty" />
        <IonRow>
          <CardImage
            source="https://images.pexels.com/photos/3794940/pexels-photo-3794940.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            title="Goodbye to crushing heats and crushing crowds"
            notes="Why fall is the best time to visit our national parks"
            button="Get the intel"
            />
        </IonRow>
        <IonRow className="empty ion-padding-vertical" />
        <Carousel
          title="Small batch stays"
          notes="Cool cities, cooler boutique hotels"
          items={[
            {
              source: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              place: "Austin"
            },
            {
              source: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              place: "Nashville"
            },
            {
              source: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              place: "New York City"
            },
            {
              source: "https://images.pexels.com/photos/4940808/pexels-photo-4940808.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              place: "Washington DC"
            }
          ]}
          />
        <IonRow className="ion-padding-vertical">
          <Carousel
            title="Plan your next escape"
            notes="Family-friendly spots to explore"
            items={[
              {
                source: "https://images.pexels.com/photos/4394639/pexels-photo-4394639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                place: "Charleston"
              },
              {
                source: "https://images.pexels.com/photos/9560055/pexels-photo-9560055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                place: "Gatlinburg"
              },
              {
                source: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                place: "Park City"
              },
              {
                source: "https://images.pexels.com/photos/4386242/pexels-photo-4386242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                place: "Sedona"
              }
            ]}
            />
        </IonRow>
        <IonRow className="empty" />
        <CardImage
          source="https://images.pexels.com/photos/2647936/pexels-photo-2647936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Explore Las Vegas, fork first"
          notes="Our guide to the top celebrity chef restaurants in Vegas"
          button="Check them out"
          />
        <IonRow className="empty ion-padding-vertical" />
        <CardImage
          source="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          title="Pack that weekender bag"
          notes="Our guide to last-minute road trips you can do right now"
          button="Read the guide"
          />
        <IonRow className="empty ion-padding-vertical" />
        <CardImage
          source="https://images.pexels.com/photos/5273316/pexels-photo-5273316.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          title="From dream trips to Michelin meals"
          notes="All the ways we're celebrating Hispanic Heritage Month"
          button="Read the guide"
          />
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default Home;
