// https://websamuraj.pl/examples/react/zadanie-wrozba/

class Magic extends React.Component {
  state = {
    options: ["pierwsza rada", "druga rada", "trzecia rada", "czwarta rada"],
    option: null,
    value: ""
  };

  handleRollAdvice = () => {
    const chosenOne = Math.floor(Math.random() * this.state.options.length);

    this.setState({
      option: this.state.options[chosenOne]
    });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAddAdvice = () => {
    if (this.state.value === "") return alert("Wpisz coś w pole tekstowe!");
    const options = [...this.state.options];
    options.push(this.state.value);
    this.setState({
      options,
      value: ""
    });
    alert(`Wróżba dodana. Aktualne wróżby: ${options}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRollAdvice}>Zobacz wróżbę</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddAdvice}>Dodaj wróżbę</button>
        <br />
        {this.state.option ? <h1>{this.state.option}</h1> : null}
        {/* <h1>{this.state.option}</h1> */}
      </div>
    );
  }
}

ReactDOM.render(<Magic />, document.getElementById("root"));
