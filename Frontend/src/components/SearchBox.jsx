
import React from "react";

function SearchBox({
  company,
  setCompany,
  analyze,
  loading
}) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-semibold mb-4">

        Analyze a Company

      </h2>

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Apple, Tesla, Microsoft..."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="flex-1 border rounded-lg p-3"
        />
<button
    onClick={analyze}
  
    disabled={loading || !company.trim()}
    className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 rounded-lg"
>

    {

        loading

        ?

        "Analyzing..."

        :

        "Analyze"

    }

</button>

      </div>

    </div>

  );

}

export default SearchBox;