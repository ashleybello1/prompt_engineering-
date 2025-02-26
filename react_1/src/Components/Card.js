function Card({ title, description, imageUrl }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", textAlign: "center", width: "300px" }}>
            <img src={imageUrl} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Card;
