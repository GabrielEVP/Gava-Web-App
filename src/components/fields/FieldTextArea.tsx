interface props {
  label: string
  name: string
}

const FieldTextArea = ({ label, name }: props) => {
  return (
    <label className="block text-sm font-medium text-black dark:text-white mb-1">
      {label}
      <textarea
        className="w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 border-gray-600 dark:text-white text-black"
        name={name}
        id={name}
        rows={32}
      />
    </label>
  )
}

export default FieldTextArea
