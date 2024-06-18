import Description from '@/components/MainCategory/FilterComponent/Description'

function FilterEachComponent({ title, description, children }) {
  return (
    <div className='m-6 flex h-auto flex-col border-b-[0.5px] border-b-gray-300 last:border-b-0'>
      <div className='mb-4'>
        <div className='mb-3 text-xl font-medium'>{title}</div>
        {description && <Description description={description} />}
      </div>
      {children}
    </div>
  )
}

export default FilterEachComponent
