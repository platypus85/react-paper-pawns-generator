import React from 'react';
import Pawn from './Pawn';

class PawnGenerated extends React.Component {
    render() {
        const {pawn} = this.props;
        var pawnsGenerated = [];
        console.log(pawn.qty);
            for (var i=0; i < pawn.qty; i++) {
                pawnsGenerated.push(<Pawn key={i} pawn={pawn} />)
            }
            console.log(pawnsGenerated);

        return (
            <div>{pawnsGenerated}</div>
        )
    }
}

export default PawnGenerated;