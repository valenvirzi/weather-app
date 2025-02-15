import Settings from "../components/Settings";

const SettingsPage: React.FC = () => {
  return (
    <div className="flex grow flex-col gap-px border-t bg-black/80">
      <div className="p-4 md:p-5">
        <h2 className="text-center text-4xl md:text-5xl">Settings</h2>
      </div>
      <Settings />
    </div>
  );
};

export default SettingsPage;
