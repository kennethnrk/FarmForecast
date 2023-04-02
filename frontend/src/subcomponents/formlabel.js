import React from 'react';

function Formlabel({text, AT}) {
    if(AT)
    {
        return (
            <label style={styles.labelAT}>
                {text}
            </label>
        );
    }
    else
    {
        return (
            <label style={styles.label}>
                {text}
            </label>
        );
    }

}

const styles = {
    label: {
        fontSize: '5vh',
        color:'#52734D',
        fontFamily:'Jaldi',

},
    labelAT:{
        fontSize: '5vh',
        color:'#ffffff',
        fontFamily:'Jaldi',
    }
}
export default Formlabel;
