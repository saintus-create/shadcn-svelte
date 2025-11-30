import { NextResponse } from "next/server"

type CountryApi = {
  cca2?: string
  cca3?: string
  name?: { common?: string }
  flag?: string // emoji
  flags?: { png?: string; svg?: string }
  region?: string
}

type NormalizedCountry = {
  value: string
  label: string
  flag: string
}

// no grouping when using flat list

export const revalidate = 0

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const q = (searchParams.get("q") || "").trim().toLowerCase()
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=cca2,cca3,name,flag,flags,region",
      { cache: "no-store" }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch countries" },
        { status: res.status }
      )
    }

    const data = (await res.json()) as CountryApi[]

    let countries: NormalizedCountry[] = data
      .map((c) => {
        const code = c.cca2 || c.cca3 || ""
        const name = c.name?.common || ""
        const flag = c.flag || ""
        if (!code || !name) return null
        return { value: code, label: name, flag }
      })
      .filter(Boolean) as NormalizedCountry[]

    // Optional search
    if (q) {
      countries = countries.filter(
        (c) =>
          c.label.toLowerCase().includes(q) ||
          c.value.toLowerCase().includes(q)
      )
    }

    // Sort alphabetically by label
    countries.sort((a, b) => a.label.localeCompare(b.label))

    return NextResponse.json({ countries })
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error fetching countries" },
      { status: 500 }
    )
  }
}


