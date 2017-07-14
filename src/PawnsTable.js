import React from 'react';

class PawnsTable extends React.Component{

    render(){

        const {pawns,onRemovePawn,onUpdatePawnQuantity} = this.props;

        return(
            <div>
                 <table id="pawn-table">
                    <tbody>
                        {pawns.map((pawn, index) => (
                            <tr key={index}>
                                <td className="pawn-image" ><img alt={pawn.image} src={pawn.image}/></td>
                                <td className="pawn-qty">
                                    <input onChange={(event) => onUpdatePawnQuantity(pawn,event.target.value)} type="number" name="quantity" defaultValue={pawn.qty} min="1"/>
                                </td>
                                <td className="delete"><button onClick={() => onRemovePawn(pawn)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PawnsTable;