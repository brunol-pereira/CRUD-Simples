import react from "react"
import "./card.css"

export default function Card(props) {
    return <div className="card--container">
        <h1 className="card--title">{props.name}</h1>
        <p className="card--cost">{props.cost}</p>
        <p className="card--category">{props.category}</p>
    </div>
}