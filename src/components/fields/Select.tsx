import { Label } from '@components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@components/ui/select'

interface SelectProps {
  label: string
  placeholder: string
  selectLabel: string
  options: { value: string; label: string }[]
}

const FieldSelect: React.FC<SelectProps> = ({
  label,
  placeholder,
  selectLabel,
  options,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        className="grid w-full max-w-sm items-center gap-1.5"
        htmlFor={label}
      >
        {label}
      </Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectLabel}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FieldSelect
