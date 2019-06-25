import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {this.props.isAuthenticated
              ? items
                  .filter(i => i.owner === this.props.user.email)
                  .map(({ _id, name, owner }) => (
                    <CSSTransition key={_id} timeout={300} classNames="fade">
                      <ListGroupItem>
                        {this.props.isAuthenticated ? (
                          <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                          >
                            &times;
                          </Button>
                        ) : null}

                        {owner === this.props.user.email ? name : null}
                      </ListGroupItem>
                    </CSSTransition>
                  ))
              : null}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
