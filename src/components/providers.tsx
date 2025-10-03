"use client";

import { ThirdwebProvider } from "thirdweb/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThirdwebProvider>
      {children}
    </ThirdwebProvider>
  );
}