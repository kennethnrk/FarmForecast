import React from "react";

function Submitbtn({text, secondary, onPress}) {
    if(secondary)
    {
        return (
            <div className="d-grid">
                <button type="submit" style={styles.secondarySubmitbtn} class="btn" onClick={onPress}>
                    {text}
                </button>
            </div>
        );
    }
    else {
        return (
            <div className="d-grid">
                <button type="submit" style={styles.submitbtn} className="btn" onClick={onPress}>
                    {text}
                </button>
            </div>
        );
    }


}

const styles = {
    submitbtn:{
        background: "#52734D",
        color: '#FDFBE2',
        padding: '1vh',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '3vh',
    },
    secondarySubmitbtn:{
        background: "#91C788",
        color: '#ffffff',
        padding: '1vh',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '3vh',
    }
}

export default Submitbtn;
