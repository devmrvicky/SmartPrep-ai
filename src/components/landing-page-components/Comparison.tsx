import { APP_NAME } from "@/constants/constants";
import {
  comparisonRows,
  type railsmartType,
  type traditionalType,
} from "@/data/comparison";
import { Check, X, Brain, BarChart3 } from "lucide-react";

export default function Comparison() {
  const renderRailSmartCell = (type: railsmartType) => {
    const badges = {
      included: (
        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
          <Check className="w-4 h-4" /> Included
        </span>
      ),
      "ai-powered": (
        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
          <Brain className="w-4 h-4" /> AI Powered
        </span>
      ),
      instant: (
        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
          <Check className="w-4 h-4" /> Instant
        </span>
      ),
      adaptive: (
        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
          <BarChart3 className="w-4 h-4" /> Adaptive
        </span>
      ),
    };
    return badges[type];
  };

  const renderTraditionalCell = (type: traditionalType) => {
    const cells = {
      "not-included": (
        <span className="inline-flex items-center gap-1 text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm font-medium">
          <X className="w-4 h-4" /> Not Included
        </span>
      ),
      manual: <span className="text-gray-500">Manual</span>,
      "email-support": <span className="text-gray-500">Email Support</span>,
      static: <span className="text-gray-500">Static</span>,
    };
    return cells[type];
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose {APP_NAME}?</h2>
          <p className="text-gray-600">
            See how we stack up against traditional learning methods.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-600">
                  FEATURE
                </th>
                <th className="text-center p-4 font-semibold text-blue-600">
                  {APP_NAME}
                </th>
                <th className="text-center p-4 font-semibold text-gray-600">
                  Traditional Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 text-gray-700">{row.feature}</td>
                  <td className="p-4 text-center">
                    {renderRailSmartCell(row.railsmart)}
                  </td>
                  <td className="p-4 text-center">
                    {renderTraditionalCell(row.traditional)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
