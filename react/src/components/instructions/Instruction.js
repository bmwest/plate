import React, { Component } from 'react';

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveInstruction = this.handleRemoveInstruction.bind(this);
  }

  handleRemoveInstruction(event) {
    event.preventDefault();
    let recipeId = document.getElementById('recipe-id').textContent;
    let stepId = this.props.id;
    fetch(`https://mealkeep.herokuapp.com/api/v1/recipes/${recipeId}/instructions/${stepId}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      this.props.getAllSteps();
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="how-to">
        <li className="">
        {this.props.stepItems}
        <a href="#" title="r e m o v e" onClick={this.handleRemoveInstruction}> - </a>
        </li>
      </div>
    )
  }
}

export default Instruction;
