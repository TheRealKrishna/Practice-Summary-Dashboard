import PageTitle from "@/components/PageTitle";
import PracticeSummaryCard from "@/components/PracticeSummaryCard";
import { practices } from "@/data/practices";

export default function Home() {
  return (
    <main className="w-full">
      <div className="p-2 min-[425px]:p-6 mx-auto 2xl:max-w-384">
        <PageTitle
          title="Practice Overview"
          subtitle="Key performance metrics across dental practices"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice) => (
            <PracticeSummaryCard key={practice.id} data={practice} />
          ))}
        </div>
      </div>
    </main>
  );
}
