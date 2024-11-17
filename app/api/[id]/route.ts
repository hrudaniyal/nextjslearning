import { userData } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const para = await params;
  console.log(para);
  const { id } = await params;
  console.log(typeof id);
  const user = userData.filter((item) => item.id == Number(id));
  if (!user) {
    return new Response("user is not available in database");
  }
  return Response.json(user);
}
