import RichText from "./RichText";

interface InnerPageProps {
    data: {
        heading: string,
        text: string;
    }
}
  
  export default function InnerPage({ data } : InnerPageProps) {
    const richText = {
        body: data.text
    }
    return (
        <div className="my-16 w-full max-w-4xl mx-auto">
            <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading text-center">{data.heading}</h2>
            <div>
                <RichText data={richText}/>
            </div>
        </div>
    );
  }
  