const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMsg txt="Możesz obejrzeć ten film, zapraszamy!" />;
    } else {
      return (
        <ValidationMsg txt="Nie możesz obejrzeć tego filmu jeżeli masz mniej niż 16 lat!" />
      );
    }
  } else {
    return null;
  }
};

const ValidationMsg = props => {
  const { txt } = props;
  return <p>{txt}</p>;
};

// const PositiveMessage = () => <p>Możesz obejrzeć ten film, zapraszamy!</p>;

// const NegativeMessage = () => (
//   <p>Nie możesz obejrzeć tego filmu jeżeli masz mniej niż 16 lat! :(</p>
// );

// Nie można stosować nawiasów {} powyżej!!!

const OrderForm = props => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age">Mam wiecej niż 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketsShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMsg txt="Możesz obejrzeć ten film, zapraszamy!" />;
  //     } else {
  //       return (
  //         <ValidationMsg txt="Nie możesz obejrzeć tego filmu jeżeli masz mniej niż 16 lat!" />
  //       );
  //     }
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;
    // console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilecik na horror roku</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketsShop />, document.getElementById("root"));
