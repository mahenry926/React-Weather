var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built with React.  I am just trying to learn.</p>
      <p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the the JS framework used.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - The source for weather information.
          </li>
        </ul>
      </p>
    </div>
  );
};

module.exports = About;
