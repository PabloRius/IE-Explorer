import styled from "styled-components";

import {
  CheckCircledIcon,
  CrossCircledIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

interface AlertProps {
  message: string | null;
  type: "info" | "error" | "warning" | "success" | null;
  active: boolean;
}

const AlertContainer = styled.div<{ type: string | null; $active: boolean }>`
  padding: 0.5rem 0.7rem;
  position: fixed;
  top: 10px;
  right: 10px;
  border-radius: 0.5rem;
  color: white;
  transition: transform 0.3s ease-in-out;
  align-items: center;
  gap: 5px;
  display: flex;
  flex-direction: row;
  background-color: ${({ type }) => {
    switch (type) {
      case "info":
        return "rgb(91, 62, 238)";
      case "error":
        return "rgb(197, 68, 68)";
      case "warning":
        return "rgb(213, 118, 34)";
      case "success":
        return "rgb(30, 191, 41)";
      default:
        return "rgb(91, 62, 238)";
    }
  }};
  transform: translateX(
    ${({ $active }: { $active: boolean }) =>
      $active ? "0" : "calc(100% + 10px)"}
  );
`;

const switchIcon = (
  type: "info" | "error" | "warning" | "success" | null
): null | React.ReactElement => {
  if (!type) return null;
  switch (type) {
    case "info":
      return <InfoCircledIcon />;
    case "success":
      return <CheckCircledIcon />;
    case "warning":
      return <ExclamationTriangleIcon />;
    case "error":
      return <CrossCircledIcon />;

    default:
      return null;
  }
};

export const Alert = ({ active, message, type }: AlertProps) => {
  return (
    <AlertContainer type={type} $active={active}>
      {switchIcon(type)}
      {message}
    </AlertContainer>
  );
};
