import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../../data/mockData";
import { geoFeatures } from "../../data/mockGeoFeatures";
import { useState } from "react";
import { AiOutlineBorderInner } from "react-icons/ai";

function GeographyChart() {
  const [size, setSize] = useState(true);

  return (
    <div
      className={`${
        size ? "mt-8 h-52  w-[400px] " : "mt-8 h-64  w-[700px] pb-4"
      }`}
    >
      <div className=" relative   h-full w-full overflow-hidden">
        {" "}
        <div className="flex w-full justify-between">
          <div className="">
            {" "}
            <p className=" dark:text-white">Revenue Location</p>
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
        <ResponsiveChoropleth
          data={data}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionScale={size ? 45 : 60}
          projectionRotation={[0, 0, 0]}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          // legends={[
          //   {
          //     anchor: "bottom-left",
          //     direction: "column",
          //     justify: true,
          //     translateX: 20,
          //     translateY: -100,
          //     itemsSpacing: 0,
          //     itemWidth: 94,
          //     itemHeight: 18,
          //     itemDirection: "left-to-right",
          //     itemTextColor: "#444444",
          //     itemOpacity: 0.85,
          //     symbolSize: 18,
          //     effects: [
          //       {
          //         on: "hover",
          //         style: {
          //           itemTextColor: "#000000",
          //           itemOpacity: 1,
          //         },
          //       },
          //     ],
          //   },
          // ]}
        />
      </div>
    </div>
  );
}

export default GeographyChart;
