import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../../data/mockData";
import { useState } from "react";
import { AiOutlineBorderInner } from "react-icons/ai";
function LineChart() {
  const [size, setSize] = useState(true);
  console.log(size);
  return (
    <div className={`${size ? "h-52  w-[400px] " : " h-64  w-[700px] pb-4"}`}>
      <div className=" my-2  h-full w-full  rounded-sm bg-slate-100 p-2 shadow-lg dark:bg-slate-900 dark:text-black">
        <div className="flex w-full justify-between">
          <div className="">
            {" "}
            <p className=" dark:text-white">Revenue Generated</p>
            <p className=" dark:text-white">$45,521.25</p>
          </div>
          <div
            className=" mt-2"
            onClick={() => {
              setSize(!size);
            }}
          >
            <AiOutlineBorderInner />
          </div>
        </div>

        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default LineChart;
