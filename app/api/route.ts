export const userData = [
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  },
  {
    "id": "3",
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com"
  },
  {
    "id": "4",
    "name": "Alice Williams",
    "email": "alice.williams@example.com"
  },
  {
    "id": "5",
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com"
  }
]

 
export async function GET() {
 
  return Response.json(userData);
}
export async function POST(request: Request) {
  const user = await request.json();
  const newUser = {
    id: userData.length + 1,
    ...user
  };
  userData.push(newUser);
  return   new Response(JSON.stringify(userData),
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    })
}
