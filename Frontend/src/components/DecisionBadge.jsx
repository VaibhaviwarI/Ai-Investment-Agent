function DecisionBadge({ decision }) {

  const colors = {

    BUY: "bg-green-500",

    HOLD: "bg-yellow-500",

    PASS: "bg-red-500"

  };

  return (

    <span
      className={`${colors[decision]} text-white px-4 py-2 rounded-full font-semibold`}
    >

      {decision}

    </span>

  );

}

export default DecisionBadge;