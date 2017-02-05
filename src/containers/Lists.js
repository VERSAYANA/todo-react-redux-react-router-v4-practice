import { connect } from "react-redux";
import ListsComponent from "../components/ListsComponent";

const getNumber = (todo, list) => {
  return todo.reduce(
    (num, x) => {
      return (list.title === x.list || list.title === "All") && !x.completed
        ? num + 1
        : num;
    },
    0
  );
};

const number = (todos, lists) => {
  return lists.map(t => ({
    ...t,
    count: getNumber(todos, t) || ""
  }));
};

const mapStateToProps = state => ({
  lists: number(state.todos, state.lists)
});
const mapDispatchToProps = {
  addTag: name => ({
    type: "CREATE_LIST",
    name
  })
};

const Lists = connect(mapStateToProps, mapDispatchToProps)(ListsComponent);

export default Lists;
