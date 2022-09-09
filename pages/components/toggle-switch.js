import { useState } from "react";
import { Switch } from "@headlessui/react";

function ToggleSwitch(props) {
  const { enabled, setEnabled } = props;

  enabled ? console.log("it works") : null;

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-pink-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-gray-600 transition`}
      />
    </Switch>
  );
}

export default ToggleSwitch;
