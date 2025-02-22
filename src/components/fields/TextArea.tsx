import { Label } from '@components/ui/label'
import { Textarea } from '@components/ui/textarea'

interface props {
  label: string
  name: string
  placeholder?: string
  id?: string
}

const FieldTextArea = ({ label, name, placeholder, id }: props) => {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">{label}</Label>
      <Textarea name={name} placeholder={placeholder} id={id} rows={6} />
    </div>
  )
}

export default FieldTextArea
