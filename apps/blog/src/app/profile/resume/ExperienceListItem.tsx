export interface ExperienceListItemProps {
  company: string
  location: string
  title: string
  size: string
  startMonth: string
  endMonth?: string
  items: string[]
}

export function ExperienceListItem({
  company,
  location,
  title,
  size,
  startMonth,
  endMonth = "present",
  items,
}: ExperienceListItemProps) {
  return (
    <li>
      <div>
        <h3 className="inline text-xs font-bold">{company}</h3>
        <span className="text-xs">
          , {location} — <em>{title}</em>
          <span className="ml-1 text-3xs">(size: {size})</span>
        </span>
        <p className="text-2xs uppercase">
          {startMonth} - {endMonth}
        </p>
        <ul className="list-outside list-disc text-2xs">
          {items.map((item) => (
            <li className="ml-4" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
