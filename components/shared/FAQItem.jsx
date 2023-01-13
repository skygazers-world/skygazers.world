
export default function FAQItem ({Q,A}) {
    return (
        <div className="flex flex-col items-start justify-start mb-5">
            <p className="font-bold">{Q?Q:null}</p>
            <p>{A?A:null}</p>
        </div>
    )
}