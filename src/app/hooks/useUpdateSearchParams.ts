import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useUpdateSearchParams = (params: { key: string; values: string }[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
  params.forEach(({ key, values }) => currentParams.set(key, values));
  const search = currentParams.toString();
  const query = search ? `?${search}` : "";
  router.push(`${pathname}${query}`);
};

export default useUpdateSearchParams;
