"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // correct because folder name is "Signin"
  const hideNavbar = ["/Signin", "/signup"].includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
