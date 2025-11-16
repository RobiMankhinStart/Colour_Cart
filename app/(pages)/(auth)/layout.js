import "../../../app/globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const token = await cookies();
  const myToken = token.get("token")?.value;

  console.log(myToken);
  if (myToken) {
    return redirect("/");
  }

  return (
    <html lang="en">
      <body>
        <div className="mt-28">{children}</div>
      </body>
    </html>
  );
}
