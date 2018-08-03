import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const todo = props => {
  return (
    <div className="todo">
      <ButtonGroup>
        {props.text}
        <Button bsStyle="info" bsSize="small">
          <span className="glyphicon glyphicon-pencil" />
        </Button>
        <Button bsStyle="danger" bsSize="small">
          <span className="glyphicon glyphicon-remove" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default todo;
