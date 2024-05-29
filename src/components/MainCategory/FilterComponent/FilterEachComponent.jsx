function FilterEachComponent({ title, description, children }) {
  return (
    <div className='flex flex-col m-6 h-auto border-b-[0.5px] border-b-gray-300 last:border-b-0'>
      <div className='text-xl font-medium mb-3'>{title}</div>
      {description && <div className='text-xs text-slate-600 mb-3'>{description}</div>}
      {children}
    </div>
  )
}

export default FilterEachComponent
