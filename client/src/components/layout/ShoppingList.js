import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {Container, ListGroup, ListGroupItem, Button, Spinner} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {getItems, deleteItem} from '../../actions/item';

const ShoppingList = ({item, getItems, deleteItem, auth: {isAuthenticated}}) => {
  useEffect(() => {
    getItems()
  }, [getItems]);

  const handleDelete = (id) => {
    deleteItem(id);
  }

  const {items} = item;
  
  return (
    <Fragment>
      {isAuthenticated ? <Container>
        <ListGroup>
          {item.loading ? <Spinner className="m-auto" /> : <TransitionGroup className="shopping-list">
            {items.map(({_id, name}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button className="remove-btn mr-4" color="danger" size="sm" onClick={() => handleDelete(_id)}>&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>}
        </ListGroup>
      </Container> : null}
    </Fragment>
  )
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);