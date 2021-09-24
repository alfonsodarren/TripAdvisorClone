import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { homeOutline, searchOutline, heartOutline, pencilSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Plan from '../pages/Plan';
import Review from '../pages/Review';
import './BottomNavigation.css';

const BottomNavigation: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/explore">
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route path="/plan">
                        <Plan />
                    </Route>
                    <Route path="/review">
                        <Review />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/explore" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="explore" href="/explore">
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Explore</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="search" href="/search">
                        <IonIcon icon={searchOutline} />
                        <IonLabel>Search</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="plan" href="/plan">
                        <IonIcon icon={heartOutline} />
                        <IonLabel>Plan</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="review" href="/review">
                        <IonIcon icon={pencilSharp} />
                        <IonLabel>Review</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default BottomNavigation