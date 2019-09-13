import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import { disableBodyScroll } from 'body-scroll-lock';
import shuffle from 'shuffle-array';
import Toolbar from 'components/Toolbar';
import Footer from 'components/Footer';
import 'App.scss';
import data from './data.json';

class App extends Component {
  state = {
    wordList: [],
    correct: [],
    incorrect: [],
  };

  componentDidMount = () => {
    this.loadWords();
    disableBodyScroll(document);
  };

  loadWords = () => {
    const wordList = shuffle([].concat(...data));
    this.setState({ wordList });
  };

  resetScore = () => {
    this.setState({ correct: [], incorrect: [] });
  };

  // Remove the top card from the deck.
  onSwipe = () => {
    this.setState(prevState => {
      prevState.wordList.shift();
      const wordList = [...prevState.wordList];
      return { wordList };
    });
  };

  // Incorrect response.
  onSwipeLeft = word => {
    this.setState({ incorrect: [...this.state.incorrect, word] });
  };

  // Correct response.
  onSwipeRight = word => {
    this.setState({ correct: [...this.state.correct, word] });
  };

  // Move current card to back of deck.
  onDoubleTap = word => {
    this.setState(prevState => {
      prevState.wordList.shift();
      const wordList = [...prevState.wordList, word];
      return { wordList };
    });
  };

  resetCards = () => {
    this.loadWords();
  };

  renderCardStack = () => {
    const cards = this.state.wordList.map(word => (
      <Card
        key={word}
        onSwipe={this.onSwipe}
        onSwipeLeft={this.onSwipeLeft}
        onSwipeRight={this.onSwipeRight}
        onDoubleTap={this.onDoubleTap}
        data={word}
      >
        {word}
      </Card>
    ));

    return cards;
  };

  renderResults = () => {
    const { correct } = this.state;

    return (
      <div className="results">
        <h1>Score</h1>
        <p>
          <span className="results__correct">{correct.length}</span>
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.wordList.length < 1 && (
          <button className="reset-cards" onClick={() => this.resetCards()}>
            Reset
          </button>
        )}
        <Toolbar />
        <CardWrapper addEndCard={() => this.renderResults()}>
          {this.renderCardStack()}
        </CardWrapper>
        <Footer cardsLeft={this.state.wordList.length} />
      </div>
    );
  }
}

export default App;
