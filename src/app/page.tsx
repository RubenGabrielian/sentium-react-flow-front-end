import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {

  return (
    <main>
      <h1>Welcom to my Test Task</h1>
    </main>
  );
}
