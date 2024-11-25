
export default function SharedTitle({subtitle,title,description}) {
  return (
    <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              {subtitle}
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              {title}
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              {description}
            </p>
          </div>
  )
}
