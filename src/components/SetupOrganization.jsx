import React, { useState, useEffect } from "react";

// Simulate fetching meta-description from the website URL
const fetchMetaData = (url) => {
  const dummyMetaDescriptions = [
    "This is a dummy meta description for the website.",
    "Your website is an innovative platform to solve the modern-day problems.",
    "Explore our wide range of services to help you achieve success.",
    "Join us in revolutionizing the industry with cutting-edge technology.",
    "Your go-to platform for all things related to business growth and success."
  ];

  // Return a random description from the list
  return dummyMetaDescriptions[Math.floor(Math.random() * dummyMetaDescriptions.length)];
};

const SetupOrganization = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [pages, setPages] = useState([]);
  const [isDescriptionFetching, setIsDescriptionFetching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDescriptionFetching(true); // Set loading state

    // Simulate fetching the meta-description (this would be asynchronous in a real scenario)
    setTimeout(() => {
      const metaDescription = fetchMetaData(companyURL);
      setCompanyDescription(metaDescription); // Set the fetched description
      setIsDescriptionFetching(false); // Reset loading state
    }, 1500); // Simulate a 1.5 second delay for fetching data
  };

  useEffect(() => {
    // Dummy pages data (replace with actual backend API)
    setPages([
      { name: "Homepage", status: "Scraped" },
      { name: "About", status: "Pending" },
      { name: "Contact", status: "Scraped" },
    ]);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 max-sm:w-[90%] max-lg:w-[80%] min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-6">Setup Your Organization</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Company Name"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="url"
          required
          placeholder="Company Website URL, format- https://xyz.com"
          value={companyURL}
          onChange={(e) => setCompanyURL(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Company Description"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          rows="4"
          disabled={isDescriptionFetching} // Disable description field while fetching
        />
        <button
          type="submit"
          className="w-full p-3 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition"
          disabled={isDescriptionFetching} // Disable the button while fetching
        >
          {isDescriptionFetching ? "Fetching..." : "Submit"}
        </button>
      </form>

      {isDescriptionFetching && (
        <div className="mt-4 text-center text-gray-500">Fetching meta-description...</div>
      )}

      <div className="mt-6 space-y-4">
        {pages.map((page, index) => (
          <div key={index} className="p-4 border rounded-md flex justify-between items-center">
            <p>{page.name}</p>
            <span
              className={`text-sm ${page.status === "Scraped" ? "text-green-500" : "text-yellow-500"}`}
            >
              {page.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupOrganization;
