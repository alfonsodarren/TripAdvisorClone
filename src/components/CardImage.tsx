import { IonButton, IonCard, IonCardContent, IonCol, IonImg, IonRow } from "@ionic/react"
import "./CardImage.css";

const CardImage: React.FC<{
    source: string | undefined,
    title: string | undefined,
    notes: string | undefined,
    button: string | undefined
}> = props => {
    return (
        <IonRow>
            <IonCol className="seasonal">
                <IonCard>
                    <IonImg src={props.source == "" ? "https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png" : props.source } />
                    <IonCardContent className="overlay">
                        <h1>
                            {props.title}
                        </h1>
                        <p>
                            {props.notes}
                        </p>
                        <IonButton color="only" shape="round">
                            {props.button}
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default CardImage