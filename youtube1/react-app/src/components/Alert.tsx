import { ReactNode } from "react";

interface Props {
  children: ReactNode; // this is useful when you want to pass HTML code as children
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
