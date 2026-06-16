import{
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function RatingChart({ ratingHistory }){
    const chartData = ratingHistory
        .filter(contest => contest.oldRating > 0)
        .slice(-30)
        .map((contest, index) => ({
            contest: index + 1,
            rating: contest.newRating
        }));
    return (
        <ResponsiveContainer
            width="100%"
            height={300}
        >
            <LineChart data={chartData}>

                <XAxis
                    dataKey="contest"
                />

                <YAxis />

                <Tooltip />

                <Line
                    type="monotone"
                    dataKey="rating"
                />

            </LineChart>
        </ResponsiveContainer>
    )    
}
export default RatingChart;