
import CardImg from '@/assets/BlueCard.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';


export const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-h-[220px]">
      <div className="max-h-[220px] relative rounded-[18px]">
        <Image src={CardImg} fill quality={100}/>
        <div className="items-end absolute justify-between pb-0 pl-[40px] pt-[100px]">
            <h1 className="text-base font-normal leading-6 text-[#FFFFFF] opacity-50">
              Cash
            </h1>
            <h1 className="text-2xl font-semibold text-white">10,000,00</h1>
          </div>
      </div>
    
      <Card className="rounded-[18px]">
        <CardHeader>
          <CardTitle>Your Income</CardTitle>
        </CardHeader>
        <CardContent>
          <p>1,200,000$</p>
          <p>Your Income Amount</p>
        </CardContent>
        <CardFooter>
          <p>32% from last month</p>
        </CardFooter>
      </Card>


      <Card className="rounded-[18px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;