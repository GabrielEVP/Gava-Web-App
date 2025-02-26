import { Input, Label } from '@components/ui'

interface props {
  label: string
  id: string
}

export function FieldFile({ label, id }: props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">{label}</Label>
      <Input id={id} type="file" />
    </div>
  )
}

export default FieldFile
