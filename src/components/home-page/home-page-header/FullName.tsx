const FullName = () => {
    const NAME = "FERNANDO ROJAS"
    return (
        <div className="profile-name-container">
            {NAME.split(" ").map((word, index) => {
                const wordDelay = index !== 0 ? NAME.split(" ")[0].length * 100 : 0;
                return (
                    <div 
                    key={`word-${index}`}
                    style={{"--word-delay": `${wordDelay + 1}ms`} as React.CSSProperties}
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
        </div>
    )
}

export default FullName;