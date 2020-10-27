import React, {Component} from 'react'



class ActiveUsers extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            users : []
         }
    }

    componentDidMount(){
        
    }



    _fetchUsers = async () => {
        await fetch('../mock.json')
        .then( res => res.json())
        .then( jsonRes => this.setState({ users : jsonRes.users }))
    }


    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default ActiveUsers;