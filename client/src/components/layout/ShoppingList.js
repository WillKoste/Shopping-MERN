import React, {useState, Fragment} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {v4 as uuidv4} from 'uuid';

const ShoppingList = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Steak'},
    {id: 2, name: 'Tree Soup'},
    {id: 3, name: 'Button Baby'},
    {id: 4, name: 'Serious Steven'}
  ]);

  const deleteItem = () => {
    setItems(items.filter(item => item.id !== item.id))
  }
  
  return (
    <Fragment>
      <Container>
        <Button color="dark" style={{marginBottom:'2rem'}}>Add Item</Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem key={id}>
                  <Button className="remove-btn mr-3" color="danger" size="sm" onClick={() => setItems(items.filter(item => item.id !== id))}>&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
           ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </Fragment>
  )
}

export default ShoppingList;