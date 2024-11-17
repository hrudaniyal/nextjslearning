export default async function page({params}:any) {
  const {slug}= await params;
  const res = await fetch(`http://localhost:3001/api/${slug}`);
  const user = await res.json()
  return (
    <section>{user.map((item : any) => {
        const { id, name, email } = item;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        );
      })}
    </section>
  );
}
