import React from 'react';
import Pawn from './Pawn';

class PawnGenerated extends React.Component {
    render() {
        const {pawn} = this.props;
        let pawnsGenerated = [];
            for (let i=0; i < pawn.qty; i++) {
                pawnsGenerated.push(<Pawn key={i} pawn={pawn} />)
            }
        return (
            <div id="pawns-to-print">{pawnsGenerated}</div>
        )
    }
}

export default PawnGenerated;