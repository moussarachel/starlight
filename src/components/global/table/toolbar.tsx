import Tag from "../tag";
import Input from "../inputs/input";
const Toolbar = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-row">
        <Tag children="No Show" />
        <Tag children="Completed" />
      </div>
      <div>FILTER</div>
      <Input
        meta={{
          title: "",
          placeholder: "search",
          value: "",
          type: "text",
          maxLength: 32,
          disabled: false,
        }}
      />
      <div className="cursor-pointer">REFRESH</div>
      <div className="cursor-pointer">TRASH</div>
    </div>
  );
};

export default Toolbar;
