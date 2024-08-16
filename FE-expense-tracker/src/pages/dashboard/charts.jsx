import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = () => {
  const chartConfig = {
    income: {
      label: "Income",
      color: "#2563eb",
    },
    expense: {
      label: "Expense",
      color: "#60a5fa",
    },
  };

  const transaction = [
    {
      month: "Aug",
      income: 30000,
      expense: 10000,
    },
  ];

  return (
    <div className="w-[588px] h-fit bg-white border border-slate-500 rounded-xl p-4">
      <div className="py-4">Income, Expense</div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={transaction}>
          <CartesianGrid vertical={false} />
          <YAxis />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Chart;
