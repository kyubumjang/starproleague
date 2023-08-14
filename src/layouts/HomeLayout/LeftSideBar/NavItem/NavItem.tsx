import { Text } from "@/components";

interface NavItemProps {
  itemLabel: string;
  icon: JSX.Element;
  showItemLabel: boolean;
}

const NavItem = (props: NavItemProps) => {
  const { itemLabel, icon, showItemLabel } = props;

  return (
    <li className="flex items-center justify-center w-full min-h-fit gap-3 py-2.5 px-3 pl-6">
      <div className="flex items-center justify-center h-6">{icon}</div>
      <div className="w-full truncate min-w-10 max-h-6">
        {showItemLabel && <Text color="white">{itemLabel}</Text>}
      </div>
    </li>
  );
};

export default NavItem;
