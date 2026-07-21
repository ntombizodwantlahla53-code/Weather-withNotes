import React from 'react'

export const Linkform = () => {
  return (
    <div className="linkForm">
          <h1 >Task2 LinkApp</h1>

          <div className="todo-wrapper">
            <div className="todo-input">
              <div className="todo-input-item">
              <label>Title</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <label>Description</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <label>URL</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <label>Tags</label>
              <input type= "text"
              placeholder="faka text">
              </input>
            </div>
            <div className="todo-input-item">
              <button type="button" className='AddBtn'>Add</button>
              </div>
</div>
          </div>
          </div>
  )
}