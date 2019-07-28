import React from "react";

export interface PostProps {
  title: string
}

export const Post = ({ title }: PostProps) => <div>{title}</div>