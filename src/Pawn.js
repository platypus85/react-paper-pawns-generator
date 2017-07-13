import React from 'react';

class Pawn extends React.Component {
    render() {
        const {pawn} = this.props;

        return (
            <div key={pawn.image} className={'pawn-container ' + pawn.size}>
                <div className="back">
                    <div className="base">
                    </div>
                    <div className="pawn-wrapper">
                        <div className="pawn">
                            <img alt="pawn_back" src={pawn.image}/>
                        </div>
                    </div>
                </div>
                <div className="front">
                    <div className="pawn-wrapper">
                        <div className="pawn">
                            <img alt="pawn_front" src={pawn.image}/>
                        </div>
                    </div>
                    <div className="base">
                    </div>
                </div>
            </div>
        )
    }
}

export default Pawn;