import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page grid place-items-center h-screen w-screen">
      <div>
        <Link href="/news">
          <a className="btn-link">
            Go to news page for demo
          </a>
        </Link>
      </div>
    </div>
  )
}

