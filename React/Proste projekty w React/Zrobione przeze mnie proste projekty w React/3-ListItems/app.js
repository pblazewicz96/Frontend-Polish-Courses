const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "male"
    },
    {
      id: 4,
      age: 22,
      name: "Kuba",
      sex: "male"
    },
    {
      id: 5,
      age: 19,
      name: "Ola",
      sex: "female"
    }
  ]
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>
      Wiek użytkownika: <strong>{user.age}</strong>
    </p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all"
  };

  handleUsersFilter(option) {
    this.setState({
      select: option
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />);
      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id} />);
      default:
        return "cos sie skopało";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>
          Wszyscy
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Kobiety
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Mężczyźni
        </button>
        {this.usersList()}
        {/* {[<Items />, <Items />, <Items />]} */}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
