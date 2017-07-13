import React from 'react';

class Pawn extends React.Component {
    render() {
        return (
            <div className="pawn-container">
                <div className="back">
                    <div className="base">
                    </div>
                    <div className="pawn-wrapper">
                        <div className="pawn">
                            
                        </div>
                    </div>
                </div>
                <div className="front">
                    <div className="pawn-wrapper">
                        <div className="pawn">
                            
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