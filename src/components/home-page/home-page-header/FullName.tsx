const FullName = () => {
    const NAME = "FERNANDO ROJAS"
    return (
        <h1 className="profile-name-container">
            {NAME.split(" ").map((word, index) => {
                return (
                    <div 
                    key={`word-${index}`}
                    className="single-word">
                        {word.split("").map((letter, index) => {
                            return (
                                <div key={`letter-${index}`} className="single-letter">
                                    {letter}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </h1>
    )
}

export default FullName;