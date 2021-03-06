import React from 'react';
import Photo from './Photo';

// class PhotoWall extends Component {
//     render() {
//         return <div className = "photoGrid">
//             {this.props.posts.map((post, index) => <Photo key={index} post={post} />)}
//         </div>
//     }
// }

function PhotoWall(props) {
    return <div className = "photoGrid">
        {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
    </div>
};

export default PhotoWall;