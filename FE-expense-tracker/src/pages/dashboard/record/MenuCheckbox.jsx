import { Checkbox } from "@/components/ui/checkbox";

const content = ['All', 'Income', 'Expense'];

export const MenuCheckbox = () => {
  return (
    <div className="flex flex-col gap-2">
      {content.map((el) => (
        <div className="items-top flex space-x-2 ">
          <Checkbox
            id={el}
            className="border-[#374151] opacity: 0.2 rounded-full"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={el}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1F2937] text-[16px] font-normal"
            >
              {el}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCheckbox;