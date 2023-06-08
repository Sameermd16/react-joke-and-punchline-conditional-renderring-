import React from 'react';

function Joke(props) {
    const [isShown, setIsShown] = React.useState(false);

    function toggleShown(){
        setIsShown((prevShown)=> {
            return !prevShown
        })
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p> {props.punchline} </p>}
            <button onClick={toggleShown}>{isShown ? "hide" : "show"} punchline</button>
            <hr />
        </div>
    )
}

export default Joke;