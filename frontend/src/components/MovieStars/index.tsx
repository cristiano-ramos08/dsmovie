import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarRalf } from 'assets/img/star-ralf.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';
import './styles.css'

function MovieStars (){

    return (

        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarRalf />
            <StarEmpty />
        </div>

    );
}

export default MovieStars;