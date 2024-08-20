import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import MenuCheckbox from './MenuCheckbox';

const Style = {
    buttonStyle: 'w-full rounded-3xl bg-[#0166FF] text-xl leading-7 font-normal',
    buttonStyle2:
      'w-full h-8 text-[16px] font-normal px-3 py-0 rounded-3xl bg-[#0166FF] hover:bg-[#0166FF]',
    buttonStyle3:
      'w-full h-8 text-[16px] font-normal py-0 rounded-3xl border-[1px] flex bg-[#F3F4F6] text-[#A3A3A3] border-[#D1D5DB] ',
  };

export const CategoryMenu = () => {
  return (
    <Command className="w-[250px] h-fit bg-white rounded-[12px] px-4 py-6 flex gap-6 ">
      <h1>Records</h1>
      <Button className={Style.buttonStyle2}>
        <PlusIcon />
        Add Category
      </Button>
      <div className={Style.buttonStyle3}>
        <CommandInput placeholder="Search" />
      </div>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Types">
          <MenuCheckbox />
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Category">
          <CommandItem>Food & Drinks</CommandItem>
          <CommandItem>Shopping</CommandItem>
          <CommandItem>Housing</CommandItem>
          <Button className="bg-white text-[#1F2937]">Add Catecory</Button>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryMenu;