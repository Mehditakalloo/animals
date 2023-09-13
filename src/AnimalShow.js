import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";

const imageMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({animalType}) {
    return <div>
        <img src={imageMap[animalType]}/>
    </div>  
} 

export default AnimalShow;