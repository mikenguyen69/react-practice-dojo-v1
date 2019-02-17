import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';

const posts = [{
    id: "0",
    description: "Beautiful landscape",
    imageLink: "https://image.dhgate.com/0x0s/f2-albu-g5-M01-53-D7-rBVaJFi6NDCAL_1pAAOIbm7LX1M667.jpg/luxury-european-modern-beautiful-scenery.jpg"
}, {
    id: "1",
    description: "Solitude",
    imageLink: "https://previews.123rf.com/images/ajsharma/ajsharma1707/ajsharma170700026/82004962-hermoso-paisaje-de-una-vista-y-%C3%A1rboles-alineados-sin-hojas-flores-rojas-y-la-cima-de-la-monta%C3%B1a-en-el-fon.jpg"
}, {
    id: "2",
    description: "I have a dream",
    imageLink: "https://ae01.alicdn.com/kf/HTB1KIZfSXXXXXXPaXXXq6xXFXXXG/Beibehang-personalizado-papel-pintado-hermosas-flores-paisaje-natural-fondos-Sala-dormitorio-TV-Fondo-pared-3d-papel.jpg"
}
]

class Main extends Component {
    render() {
        return(
            <div>
                <Title title={["Photowall"]} />
                <PhotoWall posts = {posts} />
            </div>
        )
    }
}

export default Main