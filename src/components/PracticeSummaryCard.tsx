import { PracticeSummary } from "@/types/practice";
import { getStatus } from "@/utils/practice";
import TrendMiniChart from "./TrendMiniChart";

export default function PracticeSummaryCard({
  data,
}: {
  data: PracticeSummary;
}) {
  const status = getStatus(data.conversionRate);
  return (
    <div className="rounded-xl border p-3 min-[425px]:p-6 bg-white hover:shadow-xl transition">

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{data.name}</h2>
          <p className="text-sm text-gray-500">
            {data.city}, {data.country}
          </p>
        </div>

        <span
          className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap
            ${status.color === "green" && "bg-green-100 text-green-700"}
            ${status.color === "red" && "bg-red-100 text-red-700"}
            ${status.color === "gray" && "bg-gray-100 text-gray-700"}
          `}
        >
          {status.label}
        </span>
      </div>


      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div>
          <p className="text-sm text-gray-500 whitespace-nowrap">New Patients</p>
          <p className="text-xl font-semibold">{data.newPatientsThisMonth}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 whitespace-nowrap">Appointments</p>
          <p className="text-xl font-semibold">{data.appointmentRequests}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 whitespace-nowrap">Conversion</p>
          <p className="text-xl font-semibold">{data.conversionRate}%</p>
        </div>
      </div>


      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Last 6 Months</p>
        <TrendMiniChart values={data.monthlyTrend} />
      </div>


      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Recommendations</p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Increase budget on top-performing channels</li>
          <li>Optimize mobile landing page</li>
        </ul>
      </div>
    </div>
  );
}
