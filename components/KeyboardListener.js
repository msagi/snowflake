import React from "react";

class KeyboardListener extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const {
      increaseFocusedMilestoneFn,
      selectNextTrackFn,
      decreaseFocusedMilestoneFn,
      selectPrevTrackFn,
    } = this.props; // Pegando as funções corretamente das props

    switch (e.code) {
      case "ArrowUp":
        increaseFocusedMilestoneFn();
        e.preventDefault();
        break;
      case "ArrowRight":
        selectNextTrackFn();
        e.preventDefault();
        break;
      case "ArrowDown":
        decreaseFocusedMilestoneFn();
        e.preventDefault();
        break;
      case "ArrowLeft":
        selectPrevTrackFn();
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  render() {
    return null;
  }
}

export default KeyboardListener;