import PropTypes from "prop-types";

function Player({ name, team }) {
  return (
    <div className="player">
      <div className="image-container">
        <img
          src={`/assets/king_${team}.svg`}
          className="player-logo"
          alt="Player image display"
        />
      </div>
      <span>{name}</span>
    </div>
  );
}

Player.prototype = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
};

export default Player;
