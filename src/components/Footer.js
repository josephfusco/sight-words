import React from 'react';

const Footer = ({ cardsLeft }) => {
  let message;

  switch (cardsLeft) {
    case 1:
      message = `${cardsLeft} card left`;
      break;
    case 0:
      message = `🎉`;
      break;
    default:
      message = `${cardsLeft} cards left`;
  }

  return (
    <div className="footer">
      <div className="footer__cards-remaining">{message}</div>
      <footer className="footer__footer">
        <p>Made by Delaney's Dad</p>
      </footer>
    </div>
  );
};

export default Footer;
