interface CheckProps {
  isChecked: boolean;
  className: string;
  indeterminate?: boolean;
}

const getStatus = (isChecked: boolean, indeterminate: boolean) => {
  switch (true) {
    case indeterminate:
      return "indeterminate";
    case isChecked:
      return "on";
    default:
      return "off";
  }
};

const checkIconMap = {
  on: "M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM17.5303 8.53033C17.8232 8.23744 17.8232 7.76256 17.5303 7.46967C17.2374 7.17678 16.7626 7.17678 16.4697 7.46967L10 13.9393L7.53033 11.4697C7.23744 11.1768 6.76256 11.1768 6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L9.46967 15.5303L10 16.0607L10.5303 15.5303L17.5303 8.53033Z",
  off: "M19.5 4.5H4.5L4.5 19.5H19.5V4.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5Z",
  indeterminate:
    "M3 4.5C3 3.67157 3.67157 3 4.5 3H19.5C20.3284 3 21 3.67157 21 4.5V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V4.5ZM7.5 11.1665C7.08579 11.1665 6.75 11.5023 6.75 11.9165C6.75 12.3307 7.08579 12.6665 7.5 12.6665H16.5C16.9142 12.6665 17.25 12.3307 17.25 11.9165C17.25 11.5023 16.9142 11.1665 16.5 11.1665H7.5Z",
};

const Check = (props: CheckProps) => {
  const { isChecked, indeterminate = false, className } = props;

  const status = getStatus(isChecked, indeterminate);

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={checkIconMap[status]} />
    </svg>
  );
};

export default Check;
