import Divider from "./Divider";
import "./MultiColorDivider.css";

export default function MultiColorDivider() {
  return (
    <div className="multi-divider">
      <Divider />
      <Divider
        style={{ marginTop: -40, backgroundColor: "var(--pretty-green)" }}
      />
      <Divider
        style={{ marginTop: -46, backgroundColor: "var(--pretty-blue)" }}
      />
    </div>
  );
}
