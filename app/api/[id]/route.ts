import { userData } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const user = userData.filter((item) => item.id == id);
  if (!user) {
    return new Response("user is not available in database");
  }
  return Response.json(user);
}
