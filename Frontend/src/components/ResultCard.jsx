import DecisionBadge from "./DecisionBadge";
import NewsCard from "./NewsCard";

function ResultCard({ result }) {

    const analysis = result.analysis;

    return (

        <div className="mt-8 space-y-6">

            <div className="bg-white rounded-xl shadow p-6">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-3xl font-bold">

                            {result.company}

                        </h2>

                        <p className="text-gray-500">

                            AI Investment Recommendation

                        </p>

                    </div>

                    <DecisionBadge
                        decision={analysis?.decision ?? "UNKNOWN"}
                    />

                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-bold">

                    Investment Score

                </h2>

                <p className="text-5xl font-bold text-blue-600 mt-4">

                    {analysis?.score ?? "N/A"}/100

                </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-bold mb-3">

                    Reason

                </h2>

                <p>

                    {analysis?.reason ?? "No reason provided."}

                </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-bold mb-3">

                    Risks

                </h2>

                <ul className="space-y-2">

                    {

                        (analysis?.risks ?? []).map((risk, index) => (

                            <li
                                key={index}
                                className="bg-red-50 p-3 rounded-lg"
                            >

                                ⚠ {risk}

                            </li>

                        ))

                    }

                </ul>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-xl font-bold mb-5">

                    Latest News

                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                    {

                        result.news.map((article,index)=>(

                            <NewsCard

                                key={index}

                                article={article}

                            />

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default ResultCard;