import { Bar, Line } from "react-chartjs-2";

export const BarChart = ({ chartData, text }) => {
    return (
        <div className="chart-container">
            <h2 style={styles.titleText}>Bar Chart</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: text
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
};
export const LineChart = ({ chartData, text }) => {
    return (
        <div className="chart-container">
            <h2 style={styles.titleText}>Line Graph</h2>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: text
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
};

const styles = {
    titleText:
        {
            textAlign: "center",
            color: "#52734D",
            fontSize: '5.5vh',
            fontFamily: 'Jaldi',
            fontWeight: 'Bold',
        }

}
