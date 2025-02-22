import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@components/ui/index'

interface SelectProps {
  name: string
  label: string
  placeholder: string
  selectLabel: string
  options: readonly { value: string; label: string }[]
}

const FieldSelect: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  selectLabel,
  options,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={label}>
        {label}
        <Select name={name}>
          <SelectTrigger>
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
      </Label>
    </div>
  )
}

export default FieldSelect
