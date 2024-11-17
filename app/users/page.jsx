import Link from "next/link";

export default async function page() {
  const res = await fetch("http://localhost:3001/api");
  const students = await res.json();
  return (
    <main>
      {students.map((items) => {
        const { name, id } = items;
        return (
          <section className="flex gap-5 " key={id}>
            <span>{id}</span>
            <Link href={`/users/${id}`}>{name}</Link>
          </section>
        );
      })}
    </main>
  );
}
