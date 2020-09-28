import React, { Component } from "react";

class RodoText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRodo: false,
    };
  }
  render() {
    return (
      <div className="rodo-text">
        <span
          className={`rodo-text_initial-text--${
            this.state.showRodo ? "hidden" : "shown"
          }`}
        >
          Wyrażam zgodę na przetwa.....{" "}
        </span>
        <span
          className={`rodo-text_show-more--${
            this.state.showRodo ? "hidden" : "shown"
          }`}
          onClick={() =>
            this.setState((prevState) => ({
              showRodo: !prevState.showRodo,
            }))
          }
        >
          tekst RODO
        </span>
        <span
          className={`rodo-text__more-text--${
            this.state.showRodo ? "shown" : "hidden"
          }`}
        >
          Wyrażam zgodę na przetwarzanie. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum sem felis, imperdiet id lectus
          eu, aliquam interdum lorem. Ut vel vehicula dui, sed ornare mi.
          Praesent iaculis dictum sem, sed volutpat purus tincidunt et. Donec
          lorem ex, blandit in est et, efficitur sollicitudin justo. Cras eu
          nisl eget leo vehicula rutrum at eu mi. Aenean aliquam, lorem semper
          tempus varius, tortor ante gravida mauris, eget vulputate nisl leo ut
          eros. Maecenas ac dignissim ex. Aliquam congue enim diam, a laoreet
          dolor rhoncus porta.
        </span>
      </div>
    );
  }
}
export default RodoText;
