import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Loading from "../components/Loading";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";

function Home() {

    const [company, setCompany] = useState("");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [error, setError] = useState("");

    const analyze = async () => {

        if (!company.trim()) {
            setError("Please enter a company name.");
            return;
        }

        try {

            setLoading(true);

            setError("");

            setResult(null);

            const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
            const response = await axios.post(
                `${apiBaseUrl}/analyze`,
                {
                    company
                }
            );

            setResult(response.data);

        }

        catch(err){

            console.log(err);

            const msg = err.response?.data?.message || err.message || "Failed to analyze company.";

            setError(msg);

        }

        finally{

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100">

            <Navbar />

            <div className="max-w-5xl mx-auto py-10 px-6">

                <SearchBox
                    company={company}
                    setCompany={setCompany}
                    analyze={analyze}
                    loading={loading}
                />

                {
    error &&

    <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-6">

        {error}

    </div>
}

                {loading && <Loading />}

                {!loading && result && (

                    <ResultCard
                        result={result}
                    />

                )}

            </div>

              <Footer />

        </div>

    );

}

export default Home;