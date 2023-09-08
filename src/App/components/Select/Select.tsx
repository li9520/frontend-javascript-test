import React from "react";

import { Form } from "react-bootstrap";

export type SelectProps = {
  value: string;
  options: { name: string; value: string }[];
  name: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, name }) => {
  const handleChange = (e: React.ChangeEvent<any>) => {
    onChange && onChange(e);
  };
  return (
    <Form.Select value={value} onChange={handleChange} name={name}>
      {options.map(({ value, name }) => (
        <option key={value} id={value} value={value}>
          {name}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
