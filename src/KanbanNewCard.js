/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef, useEffect } from "react";
import { kanbanCardStyles, kanbanCardTitleStyles } from './KanbanCard'

export function KanbanNewCard({ onSubmit }) {
  const [title, setTitle] = useState("");

  const inputElem = useRef(null);

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSubmit(title);
    }
  };

  useEffect(() => {
    inputElem.current.focus();
  }, []);

  return (
    <li css={kanbanCardStyles}>
      <h3>添加新卡片</h3>
      <div
        css={css`
          ${kanbanCardTitleStyles} &>input[type="text"] {
            width: 80%;
          }
        `}
      >
        <input
          ref={inputElem}
          type="text"
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </li>
  );
}
