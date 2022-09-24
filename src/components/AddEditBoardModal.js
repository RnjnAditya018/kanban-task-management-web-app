import React from "react";
import crossIcon from "../assets/icon-cross.svg";
import "../styles/BoardModals.css";

export default function AddEditBoardModal() {
  return (
    <div className="modal">
      <h3>Add New Board</h3>
      <label htmlFor="board-name-input">Board Name</label>
      <input id="board-name-input" type="text" placeholder="e.g. Web Design" />

      <label>Board Columns</label>
      <div className="modal-columns">
        <div className="modal-column">
          <input type="text" value="Todo" />
          <img src={crossIcon} />
        </div>
        <div className="modal-column">
          <input type="text" value="Doing" />
          <img src={crossIcon} />
        </div>
      </div>

      <button className="add-column-btn btn-light">+ Add New Column</button>
      <button className="add-column-btn">Create New Board</button>
    </div>
  )
}