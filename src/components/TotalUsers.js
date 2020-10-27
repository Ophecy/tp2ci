import React, {Component} from 'react'

const URL = 'http://a2berranger.alwaysdata.net/tp2/index.php';

class TotalUsers extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            nbUsers : []
         }
    }

    componentDidMount(){
        this._fetchUsers();
    }



    _fetchUsers =  () => {
        
        fetch(URL)
        .then( (res) => res.json())
        .then( json => {
            this.setState({nbUsers : json.users.length})
        })
    }


    render() { 
        const {nbUsers} = this.state
        return (
            <div className="col-3 p-3">
                <div className="card bg-white p-2">
                    <p className="text-primary font-weight-bold text-left">Total Users</p>
                    <h1 className="text-left">{nbUsers}</h1>
                </div>
            </div>
        );
    }
}
 
export default TotalUsers;