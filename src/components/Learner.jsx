import Score from "./Score";

const Learner = ({ data }) => {
    return (
        <div className="border flex flex-col gap-4 p-4 rounded-lg">
            <h1 className="text-4xl font-bold">{data.name}</h1>
            <p>{data.bio}</p>
            <ul>
                {data.scores.map((score, _) => <Score score={score} key={_} />)}
            </ul>
        </div>
    )
}



export default Learner;