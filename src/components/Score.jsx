const Score = ({ score }) => {
    return (
        <div className="flex gap-4">
            <h3 className="flex gap-6 text-gray-500">
                Date:
                <span className="text-black">
                    {score.date}
                </span>
            </h3>

            <h3 className="flex gap-6 text-gray-500">
                Score:
                <span className="text-black">
                    {score.score}
                </span>
            </h3>
        </div>
    )
}



export default Score