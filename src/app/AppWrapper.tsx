"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setDefaultOptions } from "date-fns";
import { et } from "date-fns/locale";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}
setDefaultOptions({ locale: et });

export const AppWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <Toaster />
  </QueryClientProvider>
);
