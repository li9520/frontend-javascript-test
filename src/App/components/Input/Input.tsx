import React from "react";

import { Form, Button, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export type InputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
};

const Input: React.FC<InputProps> = ({ onChange, value }) => {
  const handleChange = (e: React.ChangeEvent<any>) => {
    onChange && onChange(e);
  };

  return (
    <InputGroup>
      <Form.Control
        placeholder="Search..."
        type="text"
        autoFocus
        name="input"
        value={value}
        onChange={handleChange}
      />

      <Button
        variant="outline-secondary"
        type="submit"
        id="button-addon2"
        className="border-0 btn-light rounded-right"
      >
        <BsSearch />
      </Button>
    </InputGroup>
  );
};

export default Input;
