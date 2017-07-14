import React from 'react';
import PawnGenerated from './PawnGenerated';

class PawnsList extends React.Component{

    render(){

        const {pawns} = this.props;

        return(
            <div>
                {pawns.map((pawn, index) => (
                    <PawnGenerated key={index} pawn={pawn}/>
                ))}
            </div>
        )
    }
}

export default PawnsList;