var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.todoText.value;
    if (text.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter todo" />
          <button className="button expanded">Do It!</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
