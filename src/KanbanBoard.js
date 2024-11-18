/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const kanbanBoardStyles = css`
  flex: 10;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0 1rem 1rem;
`;


export function KanbanBoard({ children }) {
  return <main css={kanbanBoardStyles}>{children}</main>;
}

// 按快捷键 ⌃⇧R 或右键打开重构菜单，选择“移动到新文件”  真的是秒呀
