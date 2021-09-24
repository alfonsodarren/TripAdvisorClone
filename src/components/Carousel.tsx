import { IonRow, IonCol, IonImg, IonLabel } from '@ionic/react';
import './Carousel.css';

const Carousel: React.FC<{
    title: string | undefined,
    notes: string | undefined,
    items: {source: string, place: string}[]
}> = props => {
    return (
        <>
        <IonRow className="slider">
            <IonCol className="ion-padding-horizontal">
                <h4>{props.title}</h4>
                <p>{props.notes}</p>
            </IonCol>
        </IonRow>
        <IonRow className="swiper">
            <IonCol className="ion-padding-horizontal">
                {props.items.map(({source, place}, i) => (
                    <div className="image-item" key={i}>
                        <IonImg src={source} />
                        <IonLabel className="overlay">{place}</IonLabel>
                    </div>
                ))}
            </IonCol>
        </IonRow>
        </>
    )
}

export default Carousel