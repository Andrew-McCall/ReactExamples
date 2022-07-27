const LovelyOutput = ( {data} ) => {
    return(
        <ul>
            {data.map((d,i) => (
                <p key={i}>{d}</p>
            ))}
        </ul>
    )
}

export default LovelyOutput