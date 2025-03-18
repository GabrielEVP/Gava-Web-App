import { z } from 'zod'

export const BankAccountSchema = z.object({
  bankAccounts: z.array(
    z.object({
      name: z.string().max(50, 'El nombre tiene como maximo 50 Caracteres'),
      accountNumber: z
        .string()
        .max(50, 'El numero de cuenta tiene como maximo 50 Caracteres'),
      type: z.enum(['AH', 'CO', 'OT']),
    })
  )
})

export type FormBankAccount = z.infer<typeof BankAccountSchema>

export const DEFAULTBANKACCOUNTFORMVALUE = {
  name: '',
  accountNumber: '',
  type: 'OT' as 'AH' | 'CO' | 'OT'
}

