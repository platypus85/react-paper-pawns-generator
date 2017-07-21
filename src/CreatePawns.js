import React from 'react';
import ReactFileReader from 'react-file-reader';

class CreatePawns extends React.Component {
    handleFiles = (files) => {
    }

    render() {
        const {onUploadFiles} = this.props;

        return (
            <div>
                <form>
                    <ReactFileReader
                        base64={true}
                        multipleFiles={true}
                        handleFiles={onUploadFiles}>
                        <button className='btn'>Upload</button>
                    </ReactFileReader>
                </form>
            </div>
        )
    }
}

export default CreatePawns;