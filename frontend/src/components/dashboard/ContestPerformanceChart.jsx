import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell
} from "recharts";

function ContestPerformanceChart({ ratingHistory }) {

    const validContests = ratingHistory.filter(
        contest => contest.oldRating > 0
    );

    const chartData = validContests
        .slice(-30)
        .map((contest, index) => ({
            contest: index + 1,
            change:
                contest.newRating - contest.oldRating
        }));

    return (
        <ResponsiveContainer
            width="100%"
            height={220}
        >
            <BarChart data={chartData}>

                <XAxis dataKey="contest" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="change">

                    {chartData.map(
                        (entry, index) => (
                            <Cell
                                key={index}
                                fill={
                                    entry.change >= 0
                                        ? "#66bb44"
                                        : "#ef4444"
                                }
                            />
                        )
                    )}

                </Bar>

            </BarChart>

        </ResponsiveContainer>
    );
}

export default ContestPerformanceChart;