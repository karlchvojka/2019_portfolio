import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <Helmet>
              <title>404</title>
              <meta name="description" content="Karl Chvojka's Resume." />
              <meta name="keywords" content="Karl Chvojka, Web Development, React, Ruby on Rails, Resume" />
            </Helmet>
            <h1 style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </h1>
          </div>;
    }
}
export default NotFoundPage;
