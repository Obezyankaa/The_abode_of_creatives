import React from "react";

type CommentContextType = {
  value: string;
  onCahge: (value: string) => void;
};

export const CommentContext = React.createContext<CommentContextType>({
  value: "",
  onCahge: () => {},
});
