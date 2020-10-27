import React, {Component} from 'react'


class Chatrooms extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            chatrooms : []
         }
    }

    componentDidMount(){
        this._fetchChatrooms();
    }



    _fetchChatrooms =  () => {
        
        fetch('http://a2berranger.alwaysdata.net/tp2/index.php')
        .then( (res) => res.json())
        .then( json => {
            this.setState({ chatrooms : json.chatrooms})
        })
    }


    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default Chatrooms;