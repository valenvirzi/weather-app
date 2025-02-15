import React from "react";
import { SettingsItemProps } from "../types/types.ts";

const SettingsItem: React.FC<SettingsItemProps> = ({
  label,
  id,
  options,
  value,
  onChange,
}) => (
  <li className="flex w-full items-center justify-between gap-2 border-b px-3 py-4 first-of-type:border-t md:px-5">
    <label htmlFor={id} className="text-sm md:text-base">
      {label}
    </label>
    <select
      name={id}
      id={id}
      value={value}
      onChange={onChange}
      className="cursor-pointer bg-transparent p-2 text-sm md:text-base"
    >
      {options.map((option) => (
        <option
          className="text-right text-black"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </li>
);

export default SettingsItem;
