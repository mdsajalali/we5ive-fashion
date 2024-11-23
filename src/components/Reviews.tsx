"use client";

import { useState } from "react";

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("review&rating");
  const [sortOption, setSortOption] = useState("Newest");

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full max-w-3xl">
        {/* Tab Navigation */}
        <div className="flex justify-between border-b border-gray-300">
          {["Details", "Review & Rating", "Discussion"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab.toLowerCase().replace(/\s+/g, ""))
              }
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === tab.toLowerCase().replace(/\s+/g, "")
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-600"
              } hover:text-purple-600`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
          {activeTab === "details" && <p>This is the Details content.</p>}

          {activeTab === "review&rating" && (
            <div className="flex gap-10">
              <div>
                {/* Dropdown */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="relative">
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="cursor-pointer appearance-none rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="Most Helpful">Most Helpful</option>
                    </select>
                  </div>
                </div>

                {/* Review Section */}
                <div className="space-y-6">
                  {/* User Review */}
                  <div className="flex items-center gap-4">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Cameron Williamvvvson{" "}
                        <span className="text-sm text-gray-500">
                          3 days ago
                        </span>
                      </h3>
                      <div className="flex items-center">
                        <div className="text-yellow-500">★★★★☆</div>
                      </div>
                      <p className="mt-1 text-sm text-gray-700">Very Nice!!</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-500">
                      <button className="flex items-center hover:text-purple-600">
                        👍 <span className="ml-1">10</span>
                      </button>
                    </div>
                  </div>

                  {/* Add more reviews here if needed */}
                </div>
              </div>
              <div>
                {/* Review & Rating Section */}
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium">Product Review</h3>
                  <span className="text-sm text-purple-600">(121 reviews)</span>
                </div>
                <div className="my-4 flex items-center gap-4">
                  <div className="flex items-center text-2xl text-yellow-500">
                    ★★★★☆
                  </div>
                  <span className="text-lg">(4.0)</span>
                </div>
                <div>
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-yellow-500">★ {star}</span>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-yellow-500"
                          style={{
                            width: `${star * 10}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{star * 10}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "discussion" && <p>This is the Discussion content.</p>}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
