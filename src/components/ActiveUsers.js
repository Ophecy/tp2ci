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
        
        fetch('http://192.168.43.107/tp2/index.php')
        .then( (res) => res.json())
        .then( json => console.log(json))
    }


    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default ActiveUsers;