import CurveBar from "./CurveBar";

interface EmailProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailAddress: string;
}

export default function Email({ data }: { data: EmailProps }) {

  return (
    <div style={{ position: 'relative', overflow: 'hidden'}}>
      <CurveBar className="bg-teal-50" />
      <section className="py-6 bg-teal-900">
        <div className="container mx-auto flex flex-col justify-center p-6 space-y-8 md:p-12 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row text-slate-50">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold leading-none">{data.title}</h1>
            <p className="text-lg">{data.description}</p>
            <a className="text-2xl" href={`mailto: + ${data.emailAddress}`}>{data.emailAddress}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
