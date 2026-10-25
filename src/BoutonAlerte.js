import PropTypes from 'prop-types';

function BoutonAlerte({ message }) {
  const handleClick = () => {
    alert(`Message : ${message}`);
  };

  return (
    <button onClick={handleClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      Cliquez-moi
    </button>
  );
}

BoutonAlerte.propTypes = {
  message: PropTypes.string.isRequired,
};

export default BoutonAlerte;
