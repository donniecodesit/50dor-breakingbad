import spinner from "../images/spinner.gif";

export default function Loading() {
    return (
        <img 
            src={spinner}
            alt="loading"
            style={{
                width: "200px",
                margin: "auto",
                display: "block"
            }}
        />
    )
}