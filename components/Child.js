export const Child = class Child extends Component {
  render() {
    const { params: { id }} = this.props;

    return (
        <div>
          <h2>Child</h2>
          {id && <p>{id}</p>}
        </div>
    );
  }
};