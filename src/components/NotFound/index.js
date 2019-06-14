import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h1 style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </h1>
          </div>;
    }
}
export default NotFoundPage;
