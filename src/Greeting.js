import PropTypes from 'prop-types';

function Greeting({ prenom }) {
  return (
    <div>
      <h3>Bonjour, {prenom} !</h3>
      <p>Nous sommes ravis de vous compter parmi nous.</p>
    </div>
  );
}

Greeting.propTypes = {
  prenom: PropTypes.string.isRequired,
};

export default Greeting;
