import React, { useCallback, useMemo } from "react";
import { useSettings } from "../context/SettingsContext.tsx";
import { Option, SettingKey } from "../types/types.ts";
import SettingsItem from "./SettingsItem.tsx";

const Settings: React.FC = () => {
  const { currentSettings, setCurrentSettings } = useSettings();

  // Options for each select element
  const options = useMemo<Record<SettingKey, Option[]>>(
    () => ({
      tempUnit: [
        { value: "K", label: "Kelvin (°K)" },
        { value: "C", label: "Celsius (°C)" },
        { value: "F", label: "Fahrenheit (°F)" },
      ],
      speedUnit: [
        { value: "m/s", label: "m/s" },
        { value: "Km/h", label: "Km/h" },
        { value: "M/h", label: "M/h" },
      ],
      dateFormat: [
        { value: "DD/MM", label: "DD/MM" },
        { value: "MM/DD", label: "MM/DD" },
      ],
      // language: [
      //   { value: "en", label: "English" },
      //   { value: "es", label: "Spanish" },
      //   { value: "pr", label: "Portuguese" },
      // ],
    }),
    [],
  );

  // Labels for each select element
  const labels = useMemo<Record<SettingKey, string>>(
    () => ({
      tempUnit: "Temperature unit",
      speedUnit: "Speed unit",
      dateFormat: "Date format",
      // language: "Language",
    }),
    [],
  );

  // Handler for select changes
  const handleSelectChange = useCallback(
    (key: SettingKey) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentSettings((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    },
    [setCurrentSettings],
  );

  return (
    <ul className="flex flex-col items-center">
      {Object.entries(options).map(([key, values]) => (
        <SettingsItem
          key={key}
          id={key as SettingKey}
          label={labels[key as SettingKey]}
          options={values}
          value={currentSettings[key as SettingKey]}
          onChange={handleSelectChange(key as SettingKey)}
        />
      ))}
    </ul>
  );
};

export default Settings;
