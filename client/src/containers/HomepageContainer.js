import React, {Component} from 'react';
import City from '../components/City';

class HomepageContainer extends Component {
    
    state = {
        
    }

    render(){
        return(
            <div className="CityPage">
                <City />
            </div>
        )
    }
}

export default HomepageContainer;