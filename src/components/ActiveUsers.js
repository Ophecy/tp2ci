import React, {Component} from 'react'

const URL = 'http://a2berranger.alwaysdata.net/tp2/index.php';

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
        
        fetch(URL)
        .then( (res) => res.json())
        .then( json => {
            this.setState({users : json.users.filter( u => u.currentStatus ==="ACTIVE")})
        })
    }


    render() { 
        const {users} = this.state
        const server = window.location.origin
        return (
            <div className="col-3 p-3">
                <div className="card bg-white p-2">
                    <p className="text-primary font-weight-bold text-left">Active Users</p>
                    <h1 className="text-left">{users.length}</h1>
                    <p className="text-secondary">On servers: </p>
                    <p className="text-info">{server}</p>
                </div>
            </div>
        );
    }
}
 
export default ActiveUsers;