import { Card, CardContent, CardHeader, CardTitle, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";


const Chart = ({recordData}) => {
  const chartData = [
    { month: 'January', income: 20000, expense: 12000 },
    { month: 'February', income: 21000, expense: 13000 },
    { month: 'March', income: 22000, expense: 11000 },
    { month: 'April', income: 21500, expense: 14000 },
    { month: 'May', income: 23000, expense: 15000 },
    { month: 'June', income: 24000, expense: 16000 },
    { month: 'July', income: 21400, expense: 14000 },
    { month: 'August', income: 25000, expense: 17500 },
    { month: 'September', income: 26000, expense: 18000 },
    { month: 'October', income: 27000, expense: 19000 },
    { month: 'November', income: 28000, expense: 20000 },
    { month: 'December', income: 30000, expense: 22000 },
  ];
  const chartConfig = {
    desktop: {
      label: 'Income',
      color: '#0166FF',
    },
    mobile: {
      label: 'Expense',
      color: '#F54949',
    },
  };

  return (
      <Card className="h-[284px]">
        <CardHeader className="py-4 px-6 border-b-[1px]">
          <CardTitle className="text-[16px] ">Income - Expense</CardTitle>
        </CardHeader>
        <CardContent className="py-8 px-6 flex gap-4 justify-between ">
          <ChartContainer className="h-[162px] w-full" config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#CBD5E1"
              />
              <YAxis stroke="#fff" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="#CBD5E1"
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="income" fill="#0166FF" radius={4} barSize={14} />
              <Bar dataKey="expense" fill="#F54949" radius={4} barSize={14} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  };

export default Chart;
