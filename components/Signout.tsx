import { signOut } from "@/auth"
import { auth } from "@/auth"
 
export async function SignOut() {
    const session=await auth();
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="flex align-middle"
    >
      <button type="submit" className="text-gray-400 text-sm"> {session?.user?.name}</button>
    </form>
  )
}