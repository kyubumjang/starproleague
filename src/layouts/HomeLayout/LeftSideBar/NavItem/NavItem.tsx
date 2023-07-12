import { Text } from "@/components";

interface NavItemProps {
  itemLabel: string;
  icon: JSX.Element;
  showItemLabel: boolean;
}

const NavItem = (props: NavItemProps) => {
  const { itemLabel, icon, showItemLabel } = props;

  return (
    <li className="flex items-center gap-3 py-2.5 px-3">
      {icon}
      {showItemLabel && <Text color="white">{itemLabel}</Text>}
    </li>
  );
};

export default NavItem;
