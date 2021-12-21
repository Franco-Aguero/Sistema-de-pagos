import clsx from 'clsx'

export function Message({ className, image, title, content, action }) {
  return (
    <div className={clsx(className, 'flex flex-col text-center items-center')}>
      <div className="mb-6">{image}</div>
      <h2 className="mb-6 font-bold text-2xl">{title}</h2>
      <p className="text-lg">{content}</p>
      <div className="mt-11">{action}</div>
    </div>
  )
}