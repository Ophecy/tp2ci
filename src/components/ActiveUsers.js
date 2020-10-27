import React, {Component} from 'react'


class ActiveUsers extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            users : []
         }
    }

    componentDidMount(){
        this._fetchUsers();
    }



    _fetchUsers =  () => {
        
        fetch('http://a2berranger.alwaysdata.net/tp2/index.php')
        .then( (res) => res.json())
        .then( json => {
            this.setState({users : json.users.filter( u => u.currentStatus ==="ACTIVE")})
        })
    }


    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default ActiveUsers;