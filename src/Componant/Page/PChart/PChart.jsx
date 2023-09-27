import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PChart = () => {
    const [totalData, setTotalData] = useState(12)
    const storedData = JSON.parse(localStorage.getItem('donation'))
    const donationLength = storedData.length;

    useEffect(() => {
        setTotalData(totalData - donationLength)
    }, [])

    const data = [
        { name: 'Item 1', value: 12 },
        { name: 'Item 2', value: 0 },
    ];
    data[0].value = totalData
    data[1].value = donationLength

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div className=''>
            <div className='w-[400px] mx-auto'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-8 items-center justify-center'>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-lg font-medium'>Your Donation</h2>
                    <button className='h-3 w-24 bg-[#00C49F]'></button>
                </div>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-lg font-medium'>Total Donation</h2>
                    <button className='h-3 w-24 bg-[#FF444A]'></button>
                </div>
            </div>
        </div>
    );
};

export default PChart;