interface TopBarProps {
  className: string;
}

const TopBar = (props: TopBarProps) => {
  const { className } = props;

  return (
    <div className="flex items-center justify-between w-full p-4">
      <div>BreadCrumb</div>
      <div>Avatar</div>
    </div>
  );
};

export default TopBar;
