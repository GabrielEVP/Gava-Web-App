import { Control, FieldError } from 'react-hook-form'
import FieldInput from '@components/fields/Input'

interface BillingProps {
  control: Control
  errors: {
    credit_days?: FieldError
    limit_credit?: FieldError
    tax_rate?: FieldError
    discount?: FieldError
  }
}

const Billing: React.FC<BillingProps> = ({ control, errors }) => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <FieldInput
          name="credit_days"
          control={control}
          label="Días de Crédito"
          type="text"
          error={errors.credit_days}
        />
        <FieldInput
          name="limit_credit"
          control={control}
          label="Límite de Crédito"
          type="text"
          error={errors.limit_credit}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FieldInput
          name="tax_rate"
          control={control}
          label="Tasa de Impuesto por Defecto"
          type="text"
          error={errors.tax_rate}
        />
        <FieldInput
          name="discount"
          control={control}
          label="Descuento por Defecto"
          type="text"
          error={errors.discount}
        />
      </div>
    </div>
  )
}

export default Billing
