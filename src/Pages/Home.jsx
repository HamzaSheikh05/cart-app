import { Card } from "../components/Card";
import { data } from "../database/Data";

export const Home = () => {
  return (
    <main className="min-h-full">
      <section className="py-7 mx-auto bg-slate-50 dark:bg-black">
        <div className="flex flex-wrap justify-center">
          {data.map((value) => (
            <Card key={value.id} value={value} />
          ))}
        </div>
      </section>
    </main>
  );
};
