import React from 'react';

class PawnsTable extends React.Component{

    render(){

        const {pawns,onRemovePawn,onChangeSize,onUpdatePawnQuantity} = this.props;

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
                                <td>
                                    <div className="size-changer">
                                    <select
                                        value={pawn.size}
                                        onChange={(event) => onChangeSize(pawn, event.target.value)}>>
                                        <option value="tiny">Tiny</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="huge">Huge</option>
                                        <option value="gargantuan">Gargantuan</option>
                                    </select>
                                </div>
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