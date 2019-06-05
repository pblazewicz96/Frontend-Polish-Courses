const Person = props => {
  return (
    <li>
      <span>{props.name} </span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "jarek" },
      { id: 2, name: "asia" },
      { id: 3, name: "basia" },
      { id: 4, name: "joasia" },
      { id: 5, name: "grzegorz" },
      { id: 6, name: "bonifacy" }
    ]
  };

  // handleDelete = () => {};
  handleDelete(id) {
    const people = [...this.state.people];
    //który element usuwam z tablicy VVV
    const index = people.findIndex(person => person.id === id);

    //splice modyfikuje tablice która stworzyłem, chce dwoch argumentow 1-od ktorego elementu
    people.splice(index, 1);
    this.setState({
      people
    });
  }

  render() {
    return (
      <ul>
        {this.state.people.map(person => (
          <Person
            key={person.id}
            name={person.name}
            delete={this.handleDelete.bind(this, person.id)}
          />
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
