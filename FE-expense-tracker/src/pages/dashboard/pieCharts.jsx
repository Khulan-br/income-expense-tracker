import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { category: 'Food & Drinks', expense: 275, fill: 'var(--color-chrome)' },
  { category: 'Shopping', expense: 200, fill: 'var(--color-safari)' },
  { category: 'Housing', expense: 287, fill: 'var(--color-firefox)' },
  { category: 'Vehicle', expense: 173, fill: 'var(--color-edge)' },
  { category: 'other', expense: 190, fill: 'var(--color-other)' },
];
const chartConfig = {
  expense: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Food & Drinks',
    color: '#0166FF',
  },
  safari: {
    label: 'Shopping',
    color: '#E74694',
  },
  firefox: {
    label: 'Housing',
    color: '#FDBA8C',
  },
  edge: {
    label: 'Vehicle',
    color: '#16BDCA',
  },
  other: {
    label: 'Other',
    color: '#F2901C',
  },
};

export const PieDashboardChart = () => {
  return (
    <Card className="flex flex-col h-[284px]">
      <CardHeader className="items-start px-8 py-4 border-b-[1px]">
        <CardTitle className="text-[16px]">Income - Expense</CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-row-reverse justify-between items-center p-0 pr-6 ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="size-3 bg-blue-600 rounded-full"></div>
            <p>Food & Drinks</p>
          </div>
          <p>5'000'000</p>
          <p>15.50%</p>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-square h-[240px]"
        >
          <PieChart className="pb-6">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="expense"
              nameKey="category"
              innerRadius={50}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        ></tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        ></tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieChart;