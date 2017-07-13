import React from 'react';
import Pawn from './Pawn';

class PawnsList extends React.Component{

    render(){

        const {pawns} = this.props;

        return(
            <div>
                {pawns.map((pawn) => (
                    <Pawn key={pawn.image} pawn={pawn}/>
                ))}
            </div>
        )
    }
}

export default PawnsList;