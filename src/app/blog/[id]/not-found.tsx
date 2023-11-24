import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Энэ хуудас олдсонгүй</h1>
      <p>Couldn't find requested resource</p>
      <p>
        View <Link href="/blog"> All posts </Link>
      </p>
    </div>
  );
}
