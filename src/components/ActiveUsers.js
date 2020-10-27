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



    _fetchUsers = async () => {
        const headers = { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        fetch('../mock.json',headers)
        .then( res => res.json())
        .then( jsonRes => console.log(jsonRes))
    }


    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default ActiveUsers;