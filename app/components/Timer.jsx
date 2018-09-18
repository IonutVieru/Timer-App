var React = require ('react');
var {Link} = require('react-router');

var Timer = ()=>{
  return(
    <div>
    <h1>Timer component</h1>

        <Link to='/timer'></Link>

    </div>
  )
};

module.exports = Timer;
